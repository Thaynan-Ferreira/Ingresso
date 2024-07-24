function comprar(){
    let tipo = document.querySelector('#tipo-ingresso').value;
    let quantidade = document.querySelector('#qtd').value;
    let qtdInferior = document.querySelector('#qtd-inferior')

    if(tipo == 'inferior'){
        if(quantidade <= qtdInferior.textContent){
            let qtd = parseInt(qtdInferior.textContent);
            qtdInferior.textContent = qtd - quantidade;
        }
        else{
            alert(`quantidade indisponivel para ${tipo}`)
        }
        
    }
}