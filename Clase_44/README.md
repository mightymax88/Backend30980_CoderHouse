# Clase 44 - GraphQL

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)


## Reformar para usar GraphQL

### Consignas:

- [x] En base al último proyecto entregable de servidor API RESTful, reformar la capa de routeo y el controlador para que los requests puedan ser realizados a través del lenguaje de query GraphQL.
- [x] Si tuviésemos un frontend, reformarlo para soportar GraphQL y poder dialogar apropiadamente con el backend y así realizar las distintas operaciones de pedir, guardar, actualizar y borrar recursos.
- [x] Utilizar GraphQL para realizar la prueba funcional de los querys y las mutaciones.

----

En la carpeta [graphql](src/graphql/), dentro de src se crearon todos los archivos necesarios para utilizar **GraphQL**.

Para acceder a GraphQL ingresa a

### `http://localhost:3031/graphql`

#### Ejemplo de una mutación (crear un nuevo producto)

<img src="media/newProductGraphQl.png" width="900px" alt="Nuevo producto con graphql"/>

#### Ejemplo de una query

<img src="media/allProductsGraphQl.png" alt="Todos los productos con graphql"/>

<br>
:bulb: **Desarrollador:** Maximiliano Filipuzzi