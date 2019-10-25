const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../losacantilados-18485-firebase-adminsdk-375j7-cf3fe1fb34.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://losacantilados-18485.firebaseio.com/'

});

const db = admin.database();

router.get('/',(req, res) => {
    db.ref('index').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index', { proveedores: data });
    }); 
});

router.get('/proveedores',(req, res) => {
    db.ref('proveedores').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('proveedores', { proveedores: data });
    }); 
});

router.get('/empleados',(req, res) => {
    db.ref('empleados').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('empleados', { empleados: data });
    }); 
});

router.get('/productos',(req, res) => {
    db.ref('productos').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('productos', { productos: data });
    }); 
});



router.post('/new-proveedores', (req, res) => {
    console.log(req.body);
    const newProveedores = {
        nombreempresa: req.body.nombreempresa,
        direccion: req.body.direccion,
        cuit: req.body.cuit,
        telefono: req.body.telefono,
        tipo: req.body.tipo
    };
    db.ref('proveedores').push(newProveedores); 
    res.redirect('/');
});
router.get('/delete-proveedores/:id', (req, res) => {
    db.ref('proveedores/' + req.params.id).remove();
    res.redirect('/');
});
 

 router.get('/',(req, res) => {
    db.ref('empleados').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('empleados', { empleados: data });
    }); 
});

router.post('/new-empleados', (req, res) => {
    console.log(req.body);
    const newEmpleados = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cuil: req.body.cuil,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fecha_ing: req.body.fecha_ing,
        cargo: req.body.cargo,
        franco: req.body.franco,
        bonus: req.body.bonus
        
    };
    db.ref('empleados').push(newEmpleados); 
    res.redirect('/');
});
router.get('/delete-empleados/:id', (req, res) => {
    db.ref('empleados/' + req.params.id).remove();
    res.redirect('/');
});



router.get('/',(req, res) => {
    db.ref('productos').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('productos', { productos: data });
    }); 
});

router.post('/new-productos', (req, res) => {
    console.log(req.body);
    const newProductos = {
        nombre: req.body.nombre,
        id_producto: req.body.id_producto,
        tipo: req.body.tipo,
        marca: req.body.marca,
        capacidad: req.body.capacidad,
        iva: req.body.iva,
        descripcion: req.body.descripcion,
        stock_minimo: req.body.stock_minimo,
        stock_maximo: req.body.stock_maximo,
        existente: req.body.existente,
        precio: req.body.precio
    
    };
    db.ref('productos').push(newProductos); 
    res.redirect('/');
});
router.get('/delete-productos/:id', (req, res) => {
    db.ref('productos/' + req.params.id).remove();
    res.redirect('/');
});

module.exports = router;