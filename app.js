import 'dotenv/config' //Se suele utilizar para guardar variables que se usan en todo el proyecto (en produccion se guardan en un lugar mas seguro)
import express from 'express'
import userRouter from './src/routes/user.routes.js'
import productsRouter  from './src/routes/products.routes.js'
import contactsRouter from './src/routes/contact.routes.js'

const app = express() //crea una aplicacion de express pero hasta esta linea el servidor no esta escuchando peticiones

const PORT = process.env.PORT || 8080 //Puerto. Para crear un servidor necesito exponer un puerto que este disponible para comunicar con el serv.(y hacer peticiones)

app.use(express.static('public')); //Dejamos accesible la carpeta
app.use(express.json()) //Midlleware que permite recibir body de las peticiones POST o PUT // Si no existe esta linea no reconoce el body


app.get('/hello', (req,res) =>{ res.send('<h1> Hello World </h1>')}) //Expone un Endpoint de nuestra API, el etodo http es Get y la direccion(ubicacion) del recurso se expone como primer 
/*Metodos response mas usados de Express:
- res.send()    -> se usa para enviar texto u objetos, dependiendo quien pide. Ej browser - le tengo que responder un html, Frontend - le devuelvo un json
- res.json()    -> practicamente hace lo mismo que 'send' 
- res.render()  -> se usa cuando yo voy a devolver una vista
*/


/* Se usan routes mediante el metodo .use(
    Parametro 1 : la ruta base para una funcionalidad
    Parametro 2 : un ruteador importado desde una constante exportada de la carpeta routes
)*/


app.use('/users', userRouter)
app.use('/products', productsRouter)
app.use('/contacts', contactsRouter)


/* .listen
Parametro 1 : Recibe puerto donde va a estar escuchando peticiones y a donde el usuario va a enviar sus peticiones
Parametro 2 : Una funcion Callback, que por lo gral. suele hacer un console.log para indicar que la aplicacion esta corriendo en un puerto determinado
En este caso la direccion donde se encuentra el servidor es : localhost:3000
*/ 
app.listen(PORT, () =>{
    console.log(`Example app listening port ${PORT}`)
})

