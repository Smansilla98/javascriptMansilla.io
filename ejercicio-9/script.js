var inputNombre = document.getElementsByTagName("input")[0];
var inputApellidos = document.getElementsByTagName("input")[1];
var inputCP = document.getElementsByTagName("input")[2];
var inputTelefono = document.getElementsByTagName("input")[3];
var inputEnviar = document.getElementsByTagName("input")[4];
var folio = document.getElementById("div");

inputEnviar.addEventListener("click", enviar);

inputNombre.addEventListener("focus", verde);
inputNombre.addEventListener("blur", gris);

inputApellidos.addEventListener("focus", verde);
inputApellidos.addEventListener("blur", gris);


inputCP.addEventListener("focus", verde);
inputCP.addEventListener("blur", gris);

inputTelefono.addEventListener("focus", verde);
inputTelefono.addEventListener("blur", gris);


function verde(e){
  var disparador= e.target;
    disparador.style.background="green";
  
  
}
function gris(e){
  var disparador= e.target;
    disparador.style.background="darkgrey";
    if( disparador.value == "") disparador.style.background="red";

  
}

function enviar(e){
      var control =true;
      for(var i =0; i<4 ; i++){
        if(document.getElementsByTagName("input")[i].value==""){

            document.getElementsByTagName("input")[i].style.background = "blue";
            document.getElementsByTagName("input")[i].style.color = "lime";
            document.getElementsByTagName("input")[i].value = "Por favor complete los datos";

            control = false;
          }
        }
        if(control==true){
              for(var i =0; i<4;i++){
                document.getElementsByTagName("input")[i].value="";
                document.getElementsByTagName("input")[i].style.background="whitesmoke";
        }
      } 
  }
