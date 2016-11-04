$(document).ready(initializeEvents);

function initializeEvents() {
    $("#guardar").click(guardar);
    $("#borrar").click(borrar);
    $("#modificar").click(modificar);
}
// La avariable idV se va ir incrementando cada vez que guardamos una fila con los datos de una película y va a ser su id.
var idV = 0;

// La función "guardar" almacena en unas variables los datos de la formularios del Título, "año",
//"director" y "tema". Luego añadimos la fila con las célddas para el titulo, director tema y año, cada una con sus respetivas clases
// que utilizaremos después para añadir el texto almacenado en las variables. Utilizamos em método .html().
function guardar() {
    idV += 1;
    var titV = $("#tit").val();
    var dirV = $("#director").val();
    var temaV = $("#tema").val();
    var anoV = $("#anio").val();

    $("table").append("<tr><td><input type='radio'name='r'></td><td class='A'></td><td class='B'></td><td class='C'></td><td class='D'></td><td class='E'></td></tr>");
    $("table tr:last-child .A").html(idV);
    $("table tr:last-child .B").html(titV);
    $("table tr:last-child .C").html(anoV);
    $("table tr:last-child .D").html(dirV);
    $("table tr:last-child .E").html(temaV);
    $("#id").val(idV);
}

// La función "borrar" borra una fila partiento del input checqueado y subiendo dos niveles hasta llegar a esa fila.
//Para subir dos niveles concatenamos ".parent()" y ".parent()".
function borrar() {
    $(":checked").parent().parent().remove();
}

// La función "modificar" altera los datos de una fila partiento del input checqueado  y buscando los hermanos ,siblings, 
//con las clases correspondientes, las que hemos definido para campo en el momento de crear la fila.
//Chequeamos, con un condicional, que el campo del input no está vacio, 
// entendiendo que el usuario no quiere modificar un campo cuando lo deja en blanco.
function modificar() {
    var titV = $("#tit").val();
    var dirV = $("#director").val();
    var temaV = $("#tema").val();
    var anoV = $("#anio").val();

    if (titV !== "") { $(":checked").parent().siblings(".B").html(titV); }
    if (anoV !== "") { $(":checked").parent().siblings(".C").html(anoV); }
    if (dirV !== "") { $(":checked").parent().siblings(".D").html(dirV); }
    if (temaV !== "") { $(":checked").parent().siblings(".E").html(temaV); }
}