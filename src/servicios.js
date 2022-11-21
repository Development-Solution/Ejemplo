const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Etl } = require('./utils.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/adm-mostrar-productos', (req, res) => {
    inventory = new Etl('lista-items');
    const items = inventory.show(false);
    res.send(items);
});

app.get('/usr-mostrar-productos', (req, res) => {
    inventory = new Etl('lista-items');
    const items = inventory.show(true);
    res.send(items);
});

app.post('/agregar-producto', (req, res) => {
    const item = req.body;
    inventory = new Etl('lista-items');
    inventory.add(item, item.nombre, 'nombre');
    res.send('Item agregado exitosamente');
});

app.post('/modificar-producto', (req, res) => {
    const item = req.body;
    inventory = new Etl('lista-items');
    inventory.modify(item);
    res.send('Item modificado exitosamente');
});

app.post('/agregar-unidades', (req, res) => {
    const item = req.body;
    inventory = new Etl('lista-items');
    inventory.add_units(item.nombre,item.agregar);
    res.send(`Se han agregado ${item.agregar} unidades al producto ${item.nombre}`);
});

app.post('/seleccionar-carrito', (req, res) => {
    const item = req.body;
    inventory = new Etl('lista-items');
    const order = inventory.select(item);
    res.send(order);
});

app.post('/finalizar-compra', (req, res) => {
    const item = req.body;
    inventory = new Etl('lista-items');
    const invoice = inventory.finish(item);
    res.send(invoice);
});

app.post('/pagar', (req, res) => {
    const item = req.body;

    inventory = new Etl('lista-items');
    inventory.pay(item);

    let invoice = inventory.finish(item);
    delete invoice['items'];
    ledger = new Etl('lista-items_vendidos');
    ledger.add(invoice, invoice.id, 'id');

    res.send('Se ha contabilizado la compra');
});

app.listen(port, () => console.log(`La app está escuchando en el puerto ${port}!`));