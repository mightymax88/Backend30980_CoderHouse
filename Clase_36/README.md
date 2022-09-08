# Clase 36 - Tercer Entrega del Proyecto Final

## Se debe entregar:
- Un menú de registro y autenticación de usuarios basado en passport local, guardando en la
base de datos las credenciales y el resto de los datos ingresados al momento del registro.
- Un formulario post de registro y uno de login. De modo que, luego de concretarse cualquiera de estas operaciones en forma exitosa, el usuario accederá a su home.
- Envío de un email y un mensaje de whatsapp al administrador desde el servidor, a un número de contacto almacenado en una constante global.


## Registro de usuarios y aviso por email de la operación

- Creamos un nuevo usuario

<img src="../Clase_36/imagesreadme/newUserSignUp.png" alt="Nuevo usuario ejemplo"/>

- Observamos que se ha creado un nuevo documento en nuestra base de Mongo, además la contraseña está encriptada

<img src="../Clase_36/imagesreadme/newUserHashedPassword.png" alt="Contraseña encriptada ejemplo"/>

- Recibimos un correo electrónico informando el UUID con el que se ha generado este usuario.

<img src="../Clase_36/imagesreadme/emailExample.png" alt="Nuevo usuaro email ejemplo"/>

- Recibimos mensaje de WhatsApp con la misma información.

<img src="../Clase_36/imagesreadme/" alt="Imagen WhatsApp"/>