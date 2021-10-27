


 // var b = document.getElementById ("rendimiento");
 // b.addEventListener("click", entregarR);

 var c = document.getElementById("capital_input");
 c.addEventListener("keydown", Enter);

function entregarR (){
  inver();
}

 function Enter (e) {
  if (13 == e.keyCode) {
    inver();
    entregarRendimiento ();
  }

}

/*
var MB3 = document.getElementById ("b_tres");
  MB3.addEventListener("click", inver);
 
  var MB6 = document.getElementById ("b_seis");
  MB6.addEventListener("click", inver);
 
  var MB12 = document.getElementById ("b_doce");
  MB12.addEventListener("click", inver);
*/

function inver(valor){
  if (valor == undefined) {
    inversion = 3; 
    console.log(inversion);
    
  entregarRendimiento ();
    
  } else {
    inversion = valor;
    console.log(valor);
    
  entregarRendimiento ();
  }

  }  
 
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

function rendimientoPorCapital2(capital){
  switch(true){
    case capital >= 10000 && capital < 50000:
      return 6;
      break;

    case capital >= 50000 && capital < 150000:
      return 8;
      break;

    case capital >= 150000 && capital < 500000:
      return 10;
      break; 

    case capital >= 500000:
      return 12;
      break;

    default:
      return 0;
  }
};

function entregarRendimiento () 
{
  
 var meses = inversion;
 var capital = parseFloat(c.value);
 var rendimiento = parseFloat(rendimientoPorCapital(capital));
 var rendimiento2 = parseFloat(rendimientoPorCapital2(capital));
 var RM = (capital * rendimiento)  
 
 document.getElementById('cosa_txt_2').innerHTML = "  " + rendimiento2 + "%" ;
 document.getElementById('inv_1').innerHTML = "  $" + (capital.toLocaleString('en-US') );
 document.getElementById('gan_1').innerHTML = "  $" + parseFloat(RM * meses).toLocaleString('en-US') ;
 document.getElementById('mes_1').innerHTML = "  $" + parseFloat(RM).toLocaleString('en-US') ;

 document.getElementById('rend_total').innerHTML = "  $" + (parseFloat(RM * 3) + parseFloat(capital)).toLocaleString('en-US') ;
 
};

/*
-Agregarle comas a la separación de los numeros
-Exportar como PDF tipo cotización
-Agregar cuanto ganaria mensualmente  
-Agregar media Queries
-Hacer el signo de pesos mas grande                                                  (check!!)     
-Que funcionen los meses
-Generar en el input un evento de la tecla enter                                     (check!!)
-Quitarle las decimales a el rendimiento
-Estilos de los botones


*/
/* var capital = c.value;
 var rendimiento = rendimientoPorCapital(capital);
 var RM = (capital * rendimiento)  

 document.open();
      document.write("Tu Rendimiento mensual seria de " + ("$"+RM) + 
      " y al final de 3 meses seria " + ("$" + (parseFloat(RM * 3) + parseFloat(capital))) + "  " + rendimiento );
      document.close();
      */