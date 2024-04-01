const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/clientes', (req, res) => {
    res.sendFile(__dirname + '/views/clientes.html');
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`La aplicación está corriendo en el puerto ${PORT}`);
});
