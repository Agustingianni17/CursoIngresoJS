/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingresosueldo;
	var aumento;
	var suma;


	ingresosueldo= document.getElementById('sueldo').value;
	ingresosueldo=parseInt(ingresosueldo);

	aumento = ingresosueldo / 10;

	suma = ingresosueldo + aumento;


	console.log(suma);
   
   document.getElementById('resultado').value = suma;
	
    
  


}
