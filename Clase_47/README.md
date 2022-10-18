# Clase 47 - El futuro de Nodejs: Deno

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Deno JS](https://img.shields.io/badge/deno%20js-000000?style=for-the-badge&logo=deno&logoColor=white)

## Servidor en Deno

### Consignas

- [x] Crear un servidor que utilice el módulo hhtp servest y genere la vista con React render.
- [x] Configurar denon para que, ante un cambio de código, el servidor se reinicie automáticamente. El servidor presentará en su ruta raíz un formulario de ingreso de un color, que será enviado al mismo por método post. Dicho color será incorporado a un array de colores presistido en memoria. Por debajo del formulario se deberán presentar los colores recibidos en una lista desordenada (ul) utilizando el mismo color para la letra en cada caso. El color de fono de la vista será negro.


Para iniciar scripts.json (cuando estes creando un nuevo proyecto):
#### `denon --init`


Para correr el script que inicia el server, en **Clase_47/**:
#### `denon start`

De acuerdo a cada tipo de petición, se muestra en terminal un color diferente.

<img src="../Clase_47/denoRunning.png" alt="Deno running with different requests"/>

<br>
:bulb: **Desarrollador:** Maximiliano Filipuzzi