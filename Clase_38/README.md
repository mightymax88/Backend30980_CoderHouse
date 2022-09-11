# Clase 38 - Arquitectura de Capas

## Dividir en capas nuestro proyecto

### Consignas

- Dividir en capas el proyecto entregable con el que venimos trabajando (entregable clase 16: loggers y profilers), agrupando apropiadamente las capas de ruteo, controlador, lógica de negocio y persistencia.<br>
**Resultado:** se agruparon las capas por *routes, controllers, etc.*

- Considerar agrupar las rutas por funcionalidad, con sus controladores, lógica de negocio con los casos de uso, y capa de persistencia.<br>
**Resultado:** se agruparon las rutas *al inicio del server.js.*

- La capa de persistencia contendrá los métodos necesarios para atender la interacción de la lógica de negocio con los propios datos.<br>
**Resultado:** la capa de persistencia quedó en *db_persistence*


#### Conexión:

Acceder a Mongodb:

```
MBPdeMaimiliano:~ maxi$ mongodb/bin/mongod --dbpath Documents/Backend30980_CoderHouse/Clase_38/
```

Conectar Mongodb Compass.