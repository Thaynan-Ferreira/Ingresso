function comprar(){
    let tipo = document.querySelector('#tipo-ingresso').value;
    let quantidade = document.querySelector('#qtd').value;
    let qtdInferior = document.querySelector('#qtd-inferior')
    let qtdSuperior = document.querySelector('#qtd-superior')
    let qtdPista = document.querySelector('#qtd-pista')

    if(tipo == 'inferior'){
        if(quantidade <= parseInt(qtdInferior.textContent)){
            let qtd = qtdInferior.textContent;
            qtdInferior.textContent = qtd - quantidade;
        }
        else{
            alert(`quantidade indisponivel para ${tipo}`)
        }
    }
    
    else if(tipo == 'superior'){
        if(quantidade <= parseInt(qtdSuperior.textContent)){
            let qtd = qtdSuperior.textContent;
            qtdSuperior.textContent = qtd - quantidade;
        }
        else{
            alert(`quantidade indisponivel para ${tipo}`)
        }
    }
}