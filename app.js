//invocamos a express
    const express = require('express');
    const app = express();

//motor de plantillas
    app.set('view engine', 'ejs');

//usamos el archivo router.js
app.use('/',require('./router'));

//elgir metodo para capturar nuevo usuario
    app.use(express.urlencoded({extended:false}));
    app.use(express('json'));

    // Redirección inicial a /login
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log("server listening in port", app.get('port'));
    
 // Configura la carpeta 'public' para servir archivos estáticos
app.use(express.static('public'));

});


