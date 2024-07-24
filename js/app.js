//função que realiza a compra dos ingressos
function comprar(){
    //Recebe o valor digitado e o tipo de ingresso selecionado
    let tipo = document.querySelector('#tipo-ingresso').value;
    let quantidade = document.querySelector('#qtd').value;
    let qtdInferior = document.querySelector('#qtd-inferior')
    let qtdSuperior = document.querySelector('#qtd-superior')
    let qtdPista = document.querySelector('#qtd-pista')

    //testa se o usuario digitou numero Real (não da pra comprar 0,6 ingressos)
    if(!Number.isInteger(Number(quantidade))){
        alert('Digite um numero Inteiro');
    }

    else{
        //bloco condicional caso o tipo selecionado seja Cadeira Inferior
        if(tipo == 'inferior'){
            //testa se ainda há ingressos disponiveis para comprar
            if(quantidade <= parseInt(qtdInferior.textContent)){
                let qtd = qtdInferior.textContent;
                qtdInferior.textContent = qtd - quantidade;
            }
            else{
                alert(`quantidade indisponivel para ${tipo}`)
            }
        }
    
        //bloco condicional caso o tipo selecionado seja Cadeira Superior
        else if(tipo == 'superior'){
            //testa se ainda há ingressos disponiveis para comprar
            if(quantidade <= parseInt(qtdSuperior.textContent)){
                let qtd = qtdSuperior.textContent;
                qtdSuperior.textContent = qtd - quantidade;
            }
            else{
                alert(`quantidade indisponivel para ${tipo}`)
            }
        }
    
        //bloco condicional caso o tipo selecionado seja Pista
        else if(tipo == 'pista'){
            //testa se ainda há ingressos disponiveis para comprar
            if(quantidade <= parseInt(qtdPista.textContent)){
                let qtd = qtdPista.textContent;
                qtdPista.textContent = qtd - quantidade;
            }
            else{
                alert(`quantidade indisponivel para ${tipo}`)
            }
        }
    }
    
}