import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import handlebars from "express-handlebars";
import Productos from "./api/productos.js";
import Mensajes from "./api/mensajes.js";
import { MongoDB } from "./db/db.js";
import { getProdRandom } from "./generador/productos.js";
import { Server as Socket } from "socket.io";
import os from "os";
import cluster from "cluster";
import { fork } from "child_process";
const numCPUs = os.cpus().length;
const app = express();
const server = http.Server(app);
const io = new Socket(server);

const PORT = process.env.PORT || 8080;
import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

let productos = new Productos();
let mensajes = new Mensajes();

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID || "1377379292630106";
const FACEBOOK_CLIENT_SECRET =
	process.env.FACEBOOK_CLIENT_SECRET || "664cfd6f466959b6a865229fc476a428";
const CON_CHILD_PROCESS_FORK = !false;

/* --------- RANDOMS ---------- */
if (CON_CHILD_PROCESS_FORK) {
	let calculo = fork("./computo.js");

	var taskId = 0;
	var tasks = {};

	function addTask(data, callback) {
		var id = taskId++;
		calculo.send({ id: id, data: data });
		tasks[id] = callback;
	}

	calculo.on("message", function (message) {
		tasks[message.id](message);
	});

	app.get("/api/randoms", async (req, res) => {
		// addTask(req.query.cant || 100000000, (randoms) => {
		addTask(req.query.cant || 1000, (randoms) => {
			res.json(randoms);
		});
	});
} else {
	app.get("/api/randoms", async (req, res) => {
		res.send('<h2 style="color: orangered;">randoms -> no implementado!</h2>');
	});
}
passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK_CLIENT_ID,
			clientSecret: FACEBOOK_CLIENT_SECRET,
			callbackURL: "/auth/facebook/callback",
			profileFields: ["id", "displayName", "photos", "emails"],
			scope: ["email"],
		},
		function (accessToken, refreshToken, profile, done) {
			let userProfile = profile;
			return done(null, userProfile);
		}
	)
);

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	cb(null, obj);
});

/* ----------------------------------------- */

app.use(cookieParser());
app.use(
	session({
		store: MongoStore.create({
			mongoUrl:
				"mongodb+srv://<user>:<password>@cluster0.cwvci.mongodb.net/passport?retryWrites=true&w=majority",

			ttl: 600,
		}),
		secret: "shhhhhhhhhhhhhhhhhhhhh",
		resave: false,
		saveUninitialized: false,
		rolling: true,
		cookie: {
			maxAge: 600000,
		},
	})
);

app.use(passport.initialize());
app.use(passport.session());

//--------------------------------------------
//establecemos la configuración de handlebars
app.engine(
	"hbs",
	handlebars.engine({
		extname: ".hbs",
		defaultLayout: "index.hbs",
	})
);
app.set("view engine", "hbs");
app.set("views", "./views");
//--------------------------------------------

// La línea de código del recurso del espacio público está comentada
// Nginx se encarga de ofrecer los recursos estáticos
// app.use(express.static("public"));

/* -------------------------------------------------------- */
/* -------------- LOGIN y LOGOUT DE USUARIO --------------- */
/* -------------------------------------------------------- */
app.use(express.urlencoded({ extended: true }));

/* --------- LOGIN ---------- */
app.get("/login", (req, res) => {
	if (req.isAuthenticated()) {
		res.render("home", {
			nombre: req.user.displayName,
			foto: req.user.photos[0].value,
			email: req.user.emails[0].value,
			contador: req.user.contador,
		});
	} else {
		res.sendFile(process.cwd() + "/public/login.html");
	}
});

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get(
	"/auth/facebook/callback",
	passport.authenticate("facebook", {
		successRedirect: "/home",
		failureRedirect: "/faillogin",
	})
);

app.get("/home", (req, res) => {
	console.log(req.user);
	res.redirect("/");
});

app.get("/faillogin", (req, res) => {
	res.render("login-error", {});
});

app.get("/logout", (req, res) => {
	let nombre = req.user.displayName;
	req.logout();
	res.render("logout", { nombre });
});

app.get("/info", (req, res) => {
	res.render("info", {
		plat: process.platform,
		ver: process.version,
		mem: JSON.stringify(process.memoryUsage(), null, "\t"),
		execPath: process.execPath,
		pid: process.pid,
		carp: process.cwd(),
		argum: JSON.stringify(process.argv, null, "\t"),
		num: numCPUs,
	});
});

/* -------------------------------------------------------- */
/* -------------------------------------------------------- */
/* -------------------------------------------------------- */

const router = express.Router();
app.use("/api", router);

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/productos/listar", async (req, res) => {
	res.json(await productos.listarAll());
});

router.get("/productos/listar/:id", async (req, res) => {
	let { id } = req.params;
	res.json(await productos.listar(id));
});

router.post("/productos/guardar", async (req, res) => {
	let producto = req.body;
	await productos.guardar(producto);
	res.json(producto);
	//res.redirect('/')
});

router.put("/productos/actualizar/:id", async (req, res) => {
	let { id } = req.params;
	let producto = req.body;
	await productos.actualizar(producto, id);
	res.json(producto);
});

router.delete("/productos/borrar/:id", async (req, res) => {
	let { id } = req.params;
	let producto = await productos.borrar(id);
	res.json(producto);
});

router.get("/productos/vista", async (req, res) => {
	let prods = await productos.listarAll();

	res.render("vista", {
		productos: prods,
		hayProductos: prods.length,
	});
});

router.get("/productos/vista-test", async (req, res) => {
	let cant = req.query.cant || 10;
	let prods = [];
	for (let i = 0; i < cant; i++) prods.push(getProdRandom(i + 1));

	//console.log(prods)
	res.render("vista", {
		productos: prods,
		hayProductos: prods.length,
	});
});

/* -------------------- Web Sockets ---------------------- */
io.on("connection", async (socket) => {
	console.log("Nuevo cliente conectado!");

	/* ------------------- */
	/* Info Productos (ws) */
	/* ------------------- */
	/* Envio los mensajes al cliente que se conectó */
	socket.emit("productos", await productos.get());

	/* Escucho los mensajes enviado por el cliente y se los propago a todos */
	socket.on("update", async (data) => {
		if ((data = "ok")) {
			io.sockets.emit("productos", await productos.get());
		}
	});

	/* ----------------------- */
	/* Centro de mensajes (ws) */
	/* ----------------------- */
	socket.emit("messages", await mensajes.getAll());

	socket.on("new-message", async function (data) {
		//console.log(data)
		await mensajes.guardar(data);
		io.sockets.emit("messages", await mensajes.getAll());
	});
});


// Show details
app.get('/datos', (req,res) => {
	console.log(`port: ${PORT} -> Fyh: ${Date.now()}`)
	res.send(`Servidor express <span stule="color:blueviolet;">(Nginx)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

/* --------------------------------------------------------------------------- */
/* MASTER */

if (process.argv[2] === "cluster" && cluster.isPrimary) {
	console.log("numCPUs: ", numCPUs);
	console.log(`Modo Cluster - PID MASTER ${process.pid}`);
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
	cluster.on("exit", (worker) => {
		console.log("Worker", worker.process.pid, " died");
	});
} else {
	const server = app.listen(PORT, (err) => {
		if (!err)
			console.log(
				`Modo Fork - Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
			);
	});
}

/* ------------------------------------------------------- */
server.on("error", (error) => console.log(`Error en servidor ${error}`));
try {
	const mongo = new MongoDB("mongodb://localhost:27017/ecommerce");
	await mongo.conectar();
	console.log("base MongoDB conectada");
} catch (error) {
	console.log(`Error en conexión de Base de datos: ${error}`);
}
