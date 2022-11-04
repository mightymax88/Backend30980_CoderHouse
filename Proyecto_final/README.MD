# Entrega de proyecto final

Proyecto final del curso de backend de Coderhouse.
**Comisión:** 30980

## ⭐ Acerca del proyecto


Proyecto backend donde se implementa un API e-commerce para poder vender productos.
<br>
Herramientas utilizadas durante el cursado: <br>
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

<br>

## 📝 Descripción


- API para manejar productos.
- API para manejar usuarios.
- API para manejar autenticación (login y uso de JWT)
- API para manejar carrito de compras
- Uso de servicios de gmail, WhatsApp y storage para imágenes.
  - gmail para confirmar registro de usuario y venta de carrito.
  - WhatsApp para confirmar venta de carrito.
  - storage para subir photo del usuario.
- MongoDB para persistir la data en producción y la opción de utilizar en memoria para desarrollo.
- Poder habilitar el modo CLUSTER mediante variable de entorno.
- Implementar registro de logs V1 con winston y morgan.
- Trabajar con dependencias typescript y ts-node-dev en vez de Webpack.
- Implementar el proyecto en TypeScript.
- Implementar el proyecto en capas.
  - routes: capa de rutas
  - controllers: capa de controladores
  - business: capa de negocio
  - persistence: capa de persistencia con implementación de repository, dto y dao.


## 📦 Estructura de carpetas


```
├── build
├── logs
├── src
│   ├── business
│   ├── controllers
│   ├── middleware
│   │   ├── errors
│   │   ├── routes
│   │   ├── security
│   │   └── validators
│   ├── persistence
│   │   ├── dao
│   │   │   ├── productDao
│   │   │   ├── shoppingCartDao
│   │   │   └── userDao
│   │   ├── dto
│   │   └── repository
│   ├── routes
│   ├── services
│   │   ├── email
│   │   ├── storage
│   │   └── whatsapp
│   ├── store
│   │   ├── daos
│   │   ├── FileSystem
│   │   ├── firebase
│   │   ├── mongoDb
│   │   │   └── models
│   │   └── types
│   └── types
└── storage

```

## ⚛️ Implementación en Heroku:

Confirmación:

![Imagen](./heroku_info.png)
<br>
Se puede encontrar en el siguiente [link](https://backend-final-project-max.herokuapp.com/).

<br>