'use strict'

var mysql      = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'api',
    user     : 'root',
    password : '',
});
/**FUNCIONES SQL */
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);

});
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
 function buscar(short){
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
const desconectar= async function(){
    connection.end();
}

/*FUNCIONES API */
function random(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= '';
    let num=10;
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
}
const decodificar = async function(req,res){
    var data = req.body;
    const chars = data.URL.split('/');
    console.log(chars);
    buscar2(chars[1],data,res);
}
const registro = async function(req,res){
    var data = req.body;
    var newUrl="rg.com/";
    let bandera =true;
    while(bandera){
        var result1=random();
        var resultado=buscar(result1);
        console.log(resultado);
        if(resultado==undefined){
            newUrl=newUrl+result1;
            registrar(data.URL,result1,newUrl,res);
            bandera=false;
        }
    }
     
}

module.exports = {
    registro,// login_admin
    decodificar,
   
    registrar,
    desconectar,
    buscar2
   
}