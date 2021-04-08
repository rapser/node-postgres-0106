# node-postgres-0106

El presente proyecto permite registrar y obtener un usuario.

- Node.js
- PostgreSQL
- Express
- pg
- Swagger
- Babel
- Nodemon
- Morgan

## Instalación

Para instalar las dependencias iniciales del proyecto ejecutamos lo siguiente:

```sh
$ npm init -y
$ npm i express pg
```

Para iniciar el servidor escribimos lo siguiente en el terminal.

```sh
$ clear
$ node src/index.js
```

Si cada vez que realizamos un cambio no queremos deterner el servidor. En ese caso debemos usar nodemon.

```sh
$ npm i nodemon -D
$ npm run dev
```