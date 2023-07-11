REQUERIMIENTOS

- instalar node js, al hacerlo, tambien se instala npm
- instalar angular CLI, con el siguiente comando en la terminar ejecutando como administrador npm install -g @angular/cli
- los scripts de npm estan deshabilitados por defecto en windows para las consolas powershell, por lo tanto, hay que ejecutar el siguiente comando:
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned (no es necesario si se trabaja con la consola de git bash)

CREAR UN NUEVO PROYECTO

- abrir una terminal en el directorio del proyecto y ejecutar el comando ng new +nombre_proyecto
- esto preguntará si se quiere agregar routing, para proyectos desde cero es mejor decir que no, pero para proyectos con experiencia es una buena opción
- ademas preguntará con que extension de hojas de estilo se quiere trabajar, luego de seleccionar se instalaran las dependencias y se creará una carpeta con el proyecto

ABRIR PROYECTO

- para abrir el proyecto se debe inicializar un servidor, para esto se debe ingresar por terminal a la carpeta del proyecto y ejecutar el comando "ng serve"
- esto levantará los servicios y proporcionará una URL local con un puerto abierto para trabajar o el comando "ng serve -o" lo que abrirá automaticamente el 
proyecto en la URL

