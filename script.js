const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

  // Para que sirve 'preventDefault'? Intenta averiguarlo
  /*
    Este evento permite cancelar un evento(siempre que se pueda cancelar), 
    pero sin interrumpir el resto del evento
  */
  e.preventDefault();

  console.log("Valor del input: ", e.target.value)

  // Tu código aquí --->

  /*
  1. Necesito el DOM de los elementos con los que voy a interactuar
    Input -> #weight
             #height
    Div ->   #results 
    
  2. Recojo el valor dentro de los input, haga la operacion y empleo toFixed() que devuelve dos decimales 
     const imc = weight / ((height * height) / 10000);  y su resultado(imc) lo escriba en el div

  3. Dependiendo del imc, los diferentes textos se van coloreando dependiendo del valor.
  */
  
  let pesoIMC = document.querySelector("#weight");
  let alturaIMC = document.querySelector("#height");
  let resultadoIMC = document.querySelector("#results");

 
  let peso = pesoIMC.value;
  let altura = alturaIMC.value;

  const imc =(peso /((altura* altura) /10000)).toFixed(2);

  console.log(altura);
  console.log(peso);
  resultadoIMC.textContent = imc;

  if (imc<18.6){
    document.querySelector("form p:nth-child(2)").style.color = "red";
    document.querySelector("form #weight-guide p:nth-child(2)").style.color ="red"
    document.querySelector("form #weight-guide p:nth-child(3)").style.color ="black"
    document.querySelector("form #weight-guide p:nth-child(4)").style.color ="black"


  }else if(imc>=18.6 && imc<24.9){
    document.querySelector("form p:nth-child(2)").style.color = "green";
    document.querySelector("form #weight-guide p:nth-child(2)").style.color ="black"
    document.querySelector("form #weight-guide p:nth-child(3)").style.color ="green"
    document.querySelector("form #weight-guide p:nth-child(4)").style.color ="black"

  }else{
    document.querySelector("form p:nth-child(2)").style.color = "red";
    document.querySelector("form #weight-guide p:nth-child(2)").style.color ="black"
    document.querySelector("form #weight-guide p:nth-child(3)").style.color ="black"
    document.querySelector("form #weight-guide p:nth-child(4)").style.color ="red"

  }

});