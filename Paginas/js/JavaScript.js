// https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/success_event
// https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/db
const dbConnection = window.indexedDB.open('ventas', 2);                                   // version 1
let db;
//on success = El successevent se dispara cuando un IDBRequesttiene éxito.
dbConnection.onsuccess = () => {
    db = dbConnection.result;
    console.log("Base de datos abierta", db);
}
// El upgradeneededevento se activa cuando se intentó abrir una base de datos 
// con un número de versión superior a su versión actual.
dbConnection.onupgradeneeded = (e) => {
    db = e.target.result;//elemento que nos devuelve
    console.log("Crear objetos de DB", db);
    const coleccionObjetos = db.createObjectStore('Mardeli', {
        keyPath: 'clave'
    });
}
// El errorevento se activa IDBTransactioncuando una solicitud devuelve un error 
// y el evento aparece en el objeto de la transacción.
dbConnection.onerror = (error) =>{
    console.log(error);
}

//REGISTRAR AL CARRITO
const RegistrarCompra =(Libro)=>
{
    var Lib=Libro;
    if(Lib=='CrearMorir')
    {
        var _Clave=1;
        var _Nombre="Crear o Morir";
        var _Autor="Andres Ophenimer";
        var _Formato="pdf";
        var _precio="48 bs";
         // creando un objeto articulo 
    var art = {clave: _Clave,nombre:_Nombre, autor: _Autor,formato:_Formato,precio:_precio};
    console.log(art);
    var transaccion = db.transaction("Mardeli", "readwrite");
    const objeto = transaccion.objectStore('Mardeli');
    // insertar en el objeto
    // const cargarInfo= objeto.add(informacion);
    const cargarInfo= objeto.add(art);
    console.log("cargar informacion",cargarInfo);
    

    }
    else if(Lib=='Prico')
    {
        var _Clave=2;
        var _Nombre="Padre Rico Padre pobre";
        var _Autor="Robert Kiyosaki";
        var _Formato="pdf";
        var _precio="80 bs";
         // creando un objeto articulo 
    var art = {clave: _Clave,nombre:_Nombre, autor: _Autor,formato:_Formato,precio:_precio};
    console.log(art);
    var transaccion = db.transaction("Mardeli", "readwrite");
    const objeto = transaccion.objectStore('Mardeli');
    // insertar en el objeto
    // const cargarInfo= objeto.add(informacion);
    const cargarInfo= objeto.add(art);
    console.log("cargar informacion",cargarInfo);
   
    }
    else if(Lib=='7habitos')
    {
        var _Clave=3;
        var _Nombre="Los 7 Habito de la gente ";
        var _Autor="Covey";
        var _Formato="pdf";
        var _precio="45 bs";
         // creando un objeto articulo 
    var art = {clave: _Clave,nombre:_Nombre, autor: _Autor,formato:_Formato,precio:_precio};
    console.log(art);
    var transaccion = db.transaction("Mardeli", "readwrite");
    const objeto = transaccion.objectStore('Mardeli');
    // insertar en el objeto
    // const cargarInfo= objeto.add(informacion);
    const cargarInfo= objeto.add(art);
    console.log("cargar informacion",cargarInfo);
    }
    else if(Lib=='Nprogramador')
    {
        var _Clave=6;
        var _Nombre="El libro negro del programador ";
        var _Autor="hack";
        var _Formato="pdf";
        var _precio="25 bs";
         // creando un objeto articulo 
    var art = {clave: _Clave,nombre:_Nombre, autor: _Autor,formato:_Formato,precio:_precio};
    console.log(art);
    var transaccion = db.transaction("Mardeli", "readwrite");
    const objeto = transaccion.objectStore('Mardeli');
    // insertar en el objeto
    // const cargarInfo= objeto.add(informacion);
    const cargarInfo= objeto.add(art);
    console.log("cargar informacion",cargarInfo);
    }
    
}

//Mostrar Lista seleccionada
const devolver = ()=>{
    // Lista de boostrapp visualizar
    var lista = document.getElementById("mostrarLista");
    console.log(lista);
    db = dbConnection.result;
    // lectura de tablas
    var transaccion = db.transaction("Mardeli", "readonly");
    const objeto = transaccion.objectStore('Mardeli');
    console.log(objeto);
    // iterar los elementos
    const cursor = objeto.openCursor();
    
    var li=0;
   
    cursor.onsuccess = (e) =>{
        const c = e.target.result;
        if (c){
            
            // insertando en el html de UL, se realizo algunas concatenaciones adicionales
           // lista.innerHTML += "<li class='list-group-item'>"+c.value['clave']+'--'+c.value['nombre']+"</li>"
            lista.innerHTML+="<tr><td>"+li+"</td><td>"+ c.value['nombre']+"</td><td>"+c.value['autor']+"</td><td>"+c.value['formato']+"</td><td>"+c.value['precio']+"</td></tr>"
            c.continue();
            li++;
        } else {
            console.log("no tiene datos");
        }
    
}
}
