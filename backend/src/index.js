const express = require ('express');

const app = express();

app.get('/',(Request,Response) => Response.status(200).send('Olá mundo!!'));



app.listen(3333,() => console.log('funcionando'))

