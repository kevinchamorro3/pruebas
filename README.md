# Evaluacion primera semana NTP

## Para clonar el repositorio

-   Ejecute el siguiente comando: `git clone https://github.com/giothc94/prueba_1_NTP.git`

## Para instalar las dependencias ejecute

-   `npm i`

## Modificar el package.json con sus datos en la clave author

## Levantar el servidor en el archivo index.js

-   Debe trabajar on nodemon
-   Debe crear el script dev en onde se ejecute nodemon

## Crear un router en la carpeta `routes` que contenga

-   Un Endpoint que permita receptar un id en los parametros y que retorno un personaje
-   Un Endpoint que permita receptar un array de ids en la consulta y que retorne unicamente los personajes que coincidan con los ids
-   Un Endpoint que permita receptar un numero de pagina en la consulta y retorno los personajes de dicha pagina
-   Un Endpoint que permita receptar el genero y un numero de pagina (pagina es opcional) y que retorne los personajes que coincidan

### La estructura de respuesta es:

`{ msg: "Un mensaje", body: [] ò {} }`
