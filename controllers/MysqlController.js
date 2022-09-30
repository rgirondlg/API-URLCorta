var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'api',
    user     : 'root',
    password : '',
});
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);

});
const conectar = async function(){
   
}
const desconectar= async function(){
    connection.end();
}
const registrar= async function(url,short,newUrl,res){
  
    connection.query("INSERT INTO `registros`( `url`, `short`, `aux1`)"+
    "VALUES ('"+url+"','"+short+"','')", function (error, results, fields) {
    
        res.status(200).send({newUrl});
    });
    //desconectar();
    return "OK";
}
const buscar2 = async function(short,data,res){
    // console.log(short);
     let sql="SELECT * FROM `registros` where short= '"+short+"'  LIMIT 1";
     //console.log(sql);
     var dato="";
     connection.query(sql, function (error, results, fields) {
         if (error)
             throw error;
             dato = results; 
             results.forEach(result => {
                 console.log("URL ENCONTRADA",result.url);
 
                 dato=result.url;
                 data.URL=dato;
             console.log("data",data);
             res.status(200).send({data});
             });
                
     });
    // desconectar();
     data.URL=dato;
     console.log(data);
    
     return data;
}
 const buscar = async function(short){
    // console.log(short);
    let resultado="";
     let sql="SELECT * FROM `registros` where short= '"+short+"'  LIMIT 1";
    // console.log(sql);
     connection.query(sql, function (error, results, fields) {
         if (error)
             throw error;
        
         results.forEach(result => {
             console.log("URL ENCONTRADA",result);
             resultado= result.url;
           
             });
             console.log("dato",resultado);
        return resultado;
     });
}
module.exports = {
    conectar,
    registrar,
    desconectar,
    buscar2,
    buscar
   
}