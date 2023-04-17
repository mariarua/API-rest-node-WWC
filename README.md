# API REST con Express para una lista de productos

Este proyecto es una API REST con Express que implementa los métodos GET, POST, PATCH y DELETE para una lista de productos. Utiliza un middleware para confirmar los tipos de datos de las solicitudes entrantes y utiliza la librería Joi para validarlos. La base de datos utilizada es un archivo de texto en formato JSON.

## Requisitos previos
Para utilizar este proyecto, necesitarás tener instalados en tu ordenador los siguientes programas:

- Node.js
- NPM (Node Package Manager)
## Instalación
Para instalar el proyecto, sigue los siguientes pasos:

Descarga o clona este repositorio en tu ordenador.
Abre una terminal en el directorio raíz del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:
```
npm install
```
## Uso
Para utilizar el proyecto, sigue los siguientes pasos:

Abre una terminal en el directorio raíz del proyecto.
Ejecuta el siguiente comando para iniciar el servidor:

```
npm run dev
```




El servidor se iniciará en el puerto 3000 por defecto. Puedes cambiarlo modificando el archivo index.js.

Una vez iniciado el servidor, podrás utilizar los siguientes endpoints:

**GET** */api/v1/products*: Devuelve la lista completa de productos.  

**POST** */api/v1/products*: Crea un nuevo producto en la lista. Debes enviar un objeto JSON con la siguiente estructura:
```
{
    "name": "Nombre del producto",
    "description": "Descripción del producto",
    "price": "Precio del producto,
    "quantity": "Cantidad disponible",
    "category": "Categoria del producto"
}
```
**PATCH** */api/v1/products/{id}*: Actualiza un producto existente en la lista. Debes enviar un objeto JSON con las propiedades que desees actualizar. La propiedad id del producto a actualizar se especifica en la URL.
```
{
    "id": "Id del producto",
    "name": "Nombre del producto",
    "description": "Descripción del producto",
    "price": "Precio del producto,
    "quantity": "Cantidad disponible",
    "category": "Categoria del producto"
}
```

**DELETE** */api/v1/products/{id}*: Elimina un producto existente en la lista. La propiedad id del producto a eliminar se especifica en la URL.
