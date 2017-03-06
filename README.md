# Aplicacion web react + reactBoostrap

Para poder correr esta aplicacion solo hay que correr el siguiente comendo usando tu terminal con tu prompt situado en la carpea donde desees clonar el proyecto.

```sh
$ git clone https://github.com/CharlesSilva/test-creze.git
```

despues podemos correr el proyecto en modo dev para esto en el mismo directorio corremos la siguiente linea

```sh
$ npm install
```
esperamos a que termine de instalar y corremos el siguiente comando

```sh
$ npm start
```

veras que se abre tu navegador en la liga http://localhost:3000 y listo puedes ver la aplicacion corriendo con normalida, solo que en un entorno de desarrollo
## Servidor node

Para que esto sea un poco mas real, podemos correr el escript "server.js" que esta en la carpeta "buildLocal", en esta carpeta se encuentran los archivos necesarios para hacer un deploy productivo.
Para llevarlo a cabo debes posicionarnos en la carpeta "buildLocal" usando el siguiente comando en la termianl. solo debes asegurarte que tu propmpt este apuntando al directorio creze-test que clonaste,  antes de ejecutar el comando

```sh
cd buildLocal/
```

ahora si ya en buildLocal podemos ejecutar la siguiente linea
```sh
node server.js
```
y recibiras unas instrucciones de tu terminal diceindote que visites http://localhost:8080 ahi veras la aplicacion corriendo con normalidad

Para poder correr esta aplicacion es necesario tener instalados:
- node
- npm


