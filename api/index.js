const server = require('./src/app');
const {conn} = require('./src/db');
const preloadProducts = require('./src/preload/preload')
const {PORT}=process.env;

conn.sync({force: true}).then(()=>{
    preloadProducts();
    server.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`);
    })
})









 


       
       
    


