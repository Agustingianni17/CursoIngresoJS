function mostrar()
{
	var edad;
    var estadoCivil;
//tomo la edad
     edad= document.getElementById('edad').value;
     estadoCivil= document.getElementById('estadoCivil').value;

     if(!(edad<18 && estadoCivil!="Soltero" ))
     {
		alert("Es muy pequeño para NO ser soltero")
     }




      if(edad<18 && (estadoCivil=="Soltero" || estadoCivil=="Divorciado"))
      if(edad<18 || estadoCivil=="Soltero")//???????
      {
      	alert("Es muy pequeño para NO ser soltero")
      }
      else{

      
      }








	


}//FIN DE LA FUNCIÓN