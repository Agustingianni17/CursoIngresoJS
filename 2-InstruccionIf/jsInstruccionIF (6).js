function mostrar()
{
	var edad;
	//tomo la edad  
    edad= document.getElementById('edad').value;

    if(edad>18)
    {
    	alert("Sos mayor de edad");
    }else
    {
    	if(edad<13)
	    {
		    alert("Sos un niño");
		}else
		{
			 alert("Sos adolescente");
		}

		
    }
    
	

 





}//FIN DE LA FUNCIÓN