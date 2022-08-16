# Desafío Clase 30 - PROXY & NGINX


## Process Manager - PM2
Para empezar a utilizarlo, se instala:
```
npm install pm2 -g
```

Ejecución genérica:
```
$ pm2 start server.js
```

Modo fork:
```
$ pm2 start server.js --name="ServerX" --watch -- PORT
```

Modo cluster:
```
$ pm2 start server.js --name="ServerX" --watch -i max -- PORT
```

Listar todas las aplicaciones:
```
$ pm2 list
```

![ejemplo](captura1.png "Example 1")

Para detener, reiniciar o eliminar:
```
$ pm2 stop/restart/delete server.js
```

## Datos:
Para visualizar los datos de los servidores en el navegador:

![ejemplo2](captura2.png "Example 2")
![ejemplo2](captura3.png "Example 3")
![ejemplo2](captura4.png "Example 4")