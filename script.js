const btn1 = document.querySelector("#btn1");
const btnProxNumero = document.querySelector("#proxNum");
const btnSortear = document.querySelector("#sortear");
const qtdSorteios = document.querySelector("#qtdSorteios");
const numerosSorteio = document.querySelector("#numerosSorteio");

let numeros = [];

btn1.addEventListener("click", ()=>{
  if(!(qtdSorteios.value>0) || !(numerosSorteio.value>0)){
    alert("Digite um número maior que 0!")
    return;
  }
  document.querySelector("#sorteio1").classList.remove("visivel");
  document.querySelector("#sorteio2").classList.add("visivel");
});

btnProxNumero.addEventListener("click", ()=>{
  numeroInputado = document.querySelector("#numInput");
  if(!(numeroInputado.value>0) || (numeroInputado.value>100)){
    alert("Digite um número entre 1 e 100!")
    return;
  }
  numeros.push(numeroInputado.value);
  numeroInputado.value=0;
  document.querySelector("#numAtual").innerHTML="Escolha seu "+(numeros.length+1)+" número";
  document.querySelector("#numeros").innerHTML=numeros;
});

btnSortear.addEventListener("click", ()=>{
  let intNumerosSorteio = parseInt(numerosSorteio.value); /* copia local p ficar mais fácil*/
  let intQtdSorteios = parseInt(qtdSorteios.value);

  if(numeros.length<parseInt(intNumerosSorteio)){
    alert("Passe ao menos "+intNumerosSorteio + " números");
    return;
  }
 
  console.log(intQtdSorteios +" sorteios com " + intNumerosSorteio + " numeros cada")
  for(i=0; i<intQtdSorteios; i++){
    let sorteioAtual = [];

    for(j=0; j<intNumerosSorteio; j++){
      indexSorteado = Math.floor(Math.random() * numeros.length);
      numeroSorteado = numeros[indexSorteado];
      while(sorteioAtual.includes(numeroSorteado)){
        indexSorteado = Math.floor(Math.random() * numeros.length);
        numeroSorteado = numeros[indexSorteado];      
      }
      sorteioAtual.push(numeroSorteado);
    }

    let sorteio = `
        <div class="sorteio">
          <div class="headerSorteio">Sorteio `+(i+1)+`</div>
          <p>`+sorteioAtual+`</p>
        </div>`;
    document.querySelector("#sorteios").innerHTML += sorteio;
  }
  document.querySelector("#sorteio2").classList.remove("visivel");
  document.querySelector("#sorteios").classList.add("visivel");

});