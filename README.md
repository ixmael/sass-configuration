# Configuración básica de SASS
Este proyecto requiere de [nodejs](https://nodejs.org).

Yo prefiero usar [yarn](https://yarnpkg.com/lang/en/), pero se puede usar todo con **NPM**.

## Instalación
```bash
# yarn
yarn install

# npm
npm install
```

## Paquetes
Para generar los paquetes (javascripts, css) en ambiente de desarrollo se ejecuta:
```bash
# yarn
yarn run build:dev

# npm
npm run build:dev
```
Este comando genera la carpeta *dist* y se guardan los archivos. Este comando continuará procesando los cambios en los archivos hasta que se ejecute teclee *ctrl+c*.

Para generar los paquetes (javascripts, css) en ambiente de producción se ejecuta:
```bash
# yarn
yarn run build

# npm
npm run build
```
Este comando genera la carpeta *dist* y se guardan los archivos. Los archivos tienen el sufijo *.min* en el nombre del archivo.
