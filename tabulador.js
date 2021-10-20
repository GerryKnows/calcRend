


 var b = document.getElementById ("rendimiento");
 b.addEventListener("click", entregarRendimiento);

 var c = document.getElementById("capital_input");
 

 
 function rendimientoPorCapital(capital){
  switch(true){
    case capital >= 10000 && capital < 50000:
      return 0.06;
      break;

    case capital >= 50000 && capital < 150000:
      return 0.08;
      break;

    case capital >= 150000 && capital < 500000:
      return 0.10;
      break; 

    case capital >= 500000:
      return 0.12;
      break;

    default:
      return 0;
  }
};



function entregarRendimiento () 
{
var capital = parseFloat(c.value);
 var rendimiento = parseFloat(rendimientoPorCapital(capital));
 var RM = (capital * rendimiento)  
 
 document.getElementById('cosa_txt_2').innerHTML = "  " + rendimiento + "%" ;
 document.getElementById('inv_1').innerHTML = "  $" + capital ;
 document.getElementById('gan_1').innerHTML = "  $" + parseFloat(RM * 3) ;
 document.getElementById('rend_total').innerHTML = "  $" + (parseFloat(RM * 3) + parseFloat(capital)) ;
 
};

//hay que generar un rendimiento del primer mes deacuerdo a la fecha ingresada

/* var capital = c.value;
 var rendimiento = rendimientoPorCapital(capital);
 var RM = (capital * rendimiento)  

 document.open();
      document.write("Tu Rendimiento mensual seria de " + ("$"+RM) + 
      " y al final de 3 meses seria " + ("$" + (parseFloat(RM * 3) + parseFloat(capital))) + "  " + rendimiento );
      document.close();
      */
     