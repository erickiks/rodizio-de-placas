function Rodizio() {
    const texto = document.querySelector("h1");
    const ult = document.querySelector("#ult").value;
    const dia = document.querySelector("#dia").value;
    const data = (ult, +dia);
  

    if ((ult == 1 || ult == 2) && (dia=="segunda"|| dia=="segunda")) {
        texto.innerHTML = "Não pode circular";
        
    }

    else if ((ult== 3 || ult== 4) && (dia=="terça"|| dia=="terça")) {
        texto.innerHTML = "Não pode circular";
       
    }

    else if ((ult == 5 || ult == 6) && (dia=="quarta"|| dia=="quarta")) {
        texto.innerHTML = "Não pode circular";
       
    }

    else if ((ult == 7 || ult == 8) && (dia=="quinta"|| dia=="quinta")) {
        texto.innerHTML = "Não pode circular";
        
    }

    else if((ult == 0 || ult == 9) && (dia=="segunda" || dia=="segunda")) {
        texto.innerHTML = "Não pode circular";
        
    }

    else {
        texto.innerHTML = "Pode circular";
        
    }
}