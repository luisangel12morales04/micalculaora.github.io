let sumar = document.getElementById("btn-suma").onclick = function(){
    let datoUno = parseInt(document.getElementById("one").value)
    let datoDos = parseInt(document.getElementById("two").value)
    suma(datoUno,datoDos)
}


function suma(uno,dos){
    let respuesta = uno + dos
    document.getElementById("tree").value = respuesta
}

let restar = document.getElementById("btn-res").onclick = function(){
    let datoUno = parseInt(document.getElementById("one").value)
    let datoDos = parseInt(document.getElementById("two").value)
    resta(datoUno,datoDos)
}


function resta(uno,dos){
    let respuesta = uno - dos
    document.getElementById("tree").value = respuesta
}

let multiplicar = document.getElementById("btn-multiplicacion").onclick = function(){
    let datoUno = parseInt(document.getElementById("one").value)
    let datoDos = parseInt(document.getElementById("two").value)
    multiplica(datoUno,datoDos)
}


function multiplica(uno,dos){
    let respuesta = uno * dos
    document.getElementById("tree").value = respuesta
}

let division = document.getElementById("btn-div").onclick = function(){
    let datoUno = parseInt(document.getElementById("one").value)
    let datoDos = parseInt(document.getElementById("two").value)
    dividir(datoUno,datoDos)
}
console(datoUno,datoDos)

function dividir(uno,dos){
    let respuesta = uno / dos
    document.getElementById("tree").value = respuesta
}