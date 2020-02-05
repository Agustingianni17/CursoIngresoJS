/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	 
    var ingresosueldo;
	var aumento;
	var suma;


	ingresosueldo= document.getElementById('importe').value;
	ingresosueldo=parseInt(ingresosueldo);

	aumento = ingresosueldo * 0.20 ;

	suma = ingresosueldo - aumento;


	console.log(suma);
   
   document.getElementById('resultado').value = suma;




}
