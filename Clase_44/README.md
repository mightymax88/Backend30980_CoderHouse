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
- [x] No hace falta realizar un cliente ya que utilizaremos tests para verificar el correcto funcuonamiento de las funcionalidades desarrolladas.


## Testeamos nuestra API REST

### Consignas:

- [x] Desarrollar un cliente HTTP de pruebas que utilice Axios para enviar peticiones, realizar un test de la funcionalidad hacia la API Rest de productos, verificando la correcta lectura de productos disponibles, incorporación de nuevos productos, modificación y borrado.
> Generación de requests con **Axios** [acá](Clase_42/test/controllers/product.test.js).
- [x] Realizar el cliente en un módulo independiente y desde un código aparte generar las peticiones correspondientes, revisando los resultados desde la base de datos y en la respuesta del servidor obtenida en el cliente HTTP.
- [x] Luego, realizar las mismas pruebas, a través de un código de test apropiado, que utilice mocha, chai y Supertest, para probar cada uno de los métodos HTTP de la API Rest de productos.
> Se realizaron los [otros tests](Clase_42/test/controllers/other.test.js).
- [x] Escribir una suite de test para verificar si las respuestas a la lectura, incorporación, modificación y borrado de productos son las apropiadas. Generar un reporte con los resultados obtenidos de la salida del test.
> Resultado [acá](Clase_42/testresults/TestResults_2022-09-28.txt).



<br>
:bulb: **Desarrollador:** Maximiliano Filipuzzi