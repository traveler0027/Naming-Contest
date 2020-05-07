import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

//by default, will look for 'views folder' in root level
server.set('view engine','ejs');

server.get('/', (req,res) => { 
    //render pulls ejs templates and partial views
    res.render('index',{
        content: '...'
    });
}); // server home page

server.use('/api',apiRouter);

//server loads pages from 'public' folder when requested
server.use(express.static('public'));

server.listen(config.port, () =>{
    console.info('Express listening on port: ', config.port);
}); //server console