//Selecionado os números da calculadora

let n0 = document.getElementById('0')
let n1 = document.getElementById('1')
let n2 = document.getElementById('2')
let n3 = document.getElementById('3')
let n4 = document.getElementById('4')
let n5 = document.getElementById('5')
let n6 = document.getElementById('6')
let n7 = document.getElementById('7')
let n8 = document.getElementById('8')
let n9 = document.getElementById('9')


//Selecionando os operadores

let adicao = document.getElementById('adicao')
let subtracao = document.getElementById('subtracao')
let multiplicacao = document.getElementById('multiplicacao')
let divisao = document.getElementById('divisao')
let igual = document.getElementById('igual')
let ponto = document.getElementById('ponto')


//Selecionando os modos de ligar, desligar e reiniciar

let off = document.getElementById('off')
let on = document.getElementById('on')
let ac = document.getElementById('ac')


//Adicionando função clicar para cada elemento da tabela (botões no browser) selecionado

n0.addEventListener('click', colocar0)
n1.addEventListener('click', colocar1)
n2.addEventListener('click', colocar2)
n3.addEventListener('click', colocar3)
n4.addEventListener('click', colocar4)
n5.addEventListener('click', colocar5)
n6.addEventListener('click', colocar6)
n7.addEventListener('click', colocar7)
n8.addEventListener('click', colocar8)
n9.addEventListener('click', colocar9)

adicao.addEventListener('click', colocara)
subtracao.addEventListener('click', colocars)
multiplicacao.addEventListener('click', colocarm)
divisao.addEventListener('click', colocard)
igual.addEventListener('click', colocari)
ponto.addEventListener('click', colocarp)


off.addEventListener('click', colocaroff)
on.addEventListener('click', colocaron)
ac.addEventListener('click', colocarac)


//liga/desliga

let res = document.querySelector('p#res') //variável reponsável por escrever os números na tela
let ligaDesliga = 0 //Variável que impede o acesso a números e símbolos

let nTxt = ''
let v = []
let contador = 0
let indicador = 0
let defineTamanho = ''
let d = 0




function colocaroff(){

    ligaDesliga = 0
    res.innerText = ''
    nTxt = ''
    indicador = 0
    v = []
    defineTamanho = ''
    
    

}

function colocaron(){

    if(defineTamanho.length < 13){

        ligaDesliga = 1
        res.innerText = '0'
        nTxt = ''
        indicador = 0
        v = []

    }
   
 
}

/*Criando as funções para cada botão
(aqui os números serão adicionados a tela do PC e a variável "por")*/



function colocar0() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {
    
       nTxt += '0'
       res.innerHTML = nTxt 

    }

}

function colocar1() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '1'
        res.innerText = nTxt
       
    }

}

function colocar2() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '2'
        res.innerText = nTxt
    
    }

}

function colocar3() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '3'
        res.innerText = nTxt
       
    }

}

function colocar4() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '4'
        res.innerText = nTxt
      
    }

}

function colocar5() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '5'
        res.innerText = nTxt

    }

}

function colocar6() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '6'
        res.innerText = nTxt

    }

}

function colocar7() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '7'
        res.innerText = nTxt
    
    }

}

function colocar8() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '8'
        res.innerText = nTxt
    
    }

}

function colocar9() {

    if (ligaDesliga == 1 && nTxt.length < 12 && defineTamanho.length < 13) {

        nTxt += '9'
        res.innerText = nTxt 
    
    }


}

function colocarp() { //Adiciona os pontos no número

    nTxt += '.'
    res.innerText = nTxt 

}

function colocarac(){ //Limpa os números na tela

    if (ligaDesliga == 1 && defineTamanho.length < 13) {

        nTxt = ''
        res.innerText = '0' 
        indicador = 0
        v = []   
  
    }

}

//adicionando os operadores na tela



function colocara(){ //Soma

    if (ligaDesliga == 1 && defineTamanho.length < 13) {

        if(indicador == 0){

            v.push(Number(nTxt))
            v.push('s')      
            nTxt = ''
            indicador = 1
            res.innerText = '+'

        }else{
 
            if(v.length == 1){

                v.push('s')
                nTxt = ''
                res.innerText = '+'

            }else{

                colocari()
                nTxt = ''
                v.push('s')

            }
           

        }

    } 
        
}

function colocars() { //Subtração

   
    if (ligaDesliga == 1 && defineTamanho.length < 13) {
   
        if(indicador == 0){

            v.push(Number(nTxt))
            v.push('m')      
            nTxt = ''
            indicador = 1
            res.innerText = '-'

        }else{
 
            if(v.length == 1){

                v.push('m')
                nTxt = ''
                res.innerText = '-'

            }else{

                colocari()
                nTxt = ''
                v.push('m')

            }
           

        }

    }
}

function colocarm(){ //Multiplicação

   
    if (ligaDesliga == 1 && defineTamanho.length < 13) {
    
        
        if(indicador == 0){

            v.push(Number(nTxt))
            v.push('v')      
            nTxt = ''
            indicador = 1
            res.innerText = '*'

        }else{
 
            if(v.length == 1){

                v.push('v')
                nTxt = ''
                res.innerText = '*'

            }else{

                colocari()
                nTxt = ''
                v.push('v')

            }
           

        }
    }
}

function colocard(){ //Divisão

    if (ligaDesliga == 1 && defineTamanho.length < 13) {
   
        
        if(indicador == 0){

            v.push(Number(nTxt))
            v.push('d')      
            nTxt = ''
            indicador = 1
            res.innerText = '/'

        }else{
 
            if(v.length == 1){

                v.push('d')
                nTxt = ''
                res.innerText = '/'

            }else{

                colocari()
                nTxt = ''
                v.push('d')

            }
           

        }
  
    }

}

function colocari(){ //Igual

    if (ligaDesliga == 1 && nTxt != '' && defineTamanho.length < 13) {

        v.push(Number(nTxt))
        
        for(contador = 0; contador < v.length; contador ++){

            if(contador % 2 == 1){

                if(v[contador] == 'v'){

                    v[contador - 1] = v[contador - 1] * v[contador + 1]
                    v.splice(contador, 2)

                }
                if(v[contador] == 'd'){

                    v[contador - 1] = v[contador - 1] / v[contador + 1]
                    v.splice(contador, 2)
                    d = 1


                }
                

            }

        }

        for(contador = 0; contador < v.length; contador ++){

            if(contador % 2 == 1){

                if(v[contador] == 's'){

                    v[contador - 1] = v[contador - 1] + v[contador + 1]
                    v.splice(contador, 2)

                }
                if(v[contador] == 'm'){

                    v[contador - 1] = v[contador - 1] - v[contador + 1]
                    v.splice(contador, 2)

                }

            }

        }
        if(d == 1){
            res.innerText = '≃ '
            res.innerText += Math.round(v[0])
            d = 0
        }else{
            defineTamanho = String(v[0])

            if(defineTamanho.length > 13){
                res.innerText = "ERRO"
            }else{
                res.innerText = v[0]
            }
        }
        
       
        
        return v

   
    }else{

        res.innerText = "Digite algo"

    }



}