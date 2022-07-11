//Poder fazer comentários
const textComment = document.querySelectorAll("#inputText");
const form = document.querySelectorAll("#formulario");
const commentPost = document.querySelectorAll("#commentPost");

for(let i = 0; i < form.length; ++i){
    form[i].addEventListener("submit", (event) => {
        event.preventDefault();
    
        let p = document.createElement('p');
        p.classList = "p-2 d-flex text-wrap flex-wrap";
        p.innerHTML = `<strong>Username: </strong> &nbsp ${textComment[i].value}`;
        commentPost[i].appendChild(p);
        textComment[i].value = '';
    })
}

//Salvar ou não no próprio perfil
const salvar = document.querySelectorAll(".Salvar");
const voltar = document.querySelectorAll(".Voltar");

for(let i = 0; i < salvar.length; ++i){
    voltar[i].disabled = true;

    salvar[i].addEventListener("click", (event) => {
        event.preventDefault();
    
        salvar[i].disabled = true;
        voltar[i].disabled = false;
    })

    voltar[i].addEventListener("click", (event) => {
        event.preventDefault();
    
        voltar[i].disabled = true;
        salvar[i].disabled = false;
    })
}

//Limite nos comentários
const limite = 100;

function text(textarea, textoContagem, btn){
    let tamanho = textarea.value.length;
    let cont = limite - tamanho;
    let frasePronta;
    
    textoContagem.innerHTML = cont;

    const palavra = textarea.value;

    if(cont < 50 && cont >= 21){
        textoContagem.style.color = "yellow";
        btn.disabled = false;
        frasePronta = " letras restantes";
    }else if(cont <= 20 && cont >= 0){
        textoContagem.style.color = "orange";
        btn.disabled = false;
        frasePronta = " letras restantes";
    }else if(cont < 0){
        textoContagem.style.color = "red";
        btn.disabled = true;
        frasePronta = "! Limite superado";
    }else if(palavra == ""){
        textoContagem.style.color = "black";
        btn.disabled = true;
        frasePronta = " letras disp.";
    }else{
        textoContagem.style.color = "purple";
        btn.disabled = false;
        frasePronta = " letras restantes";
    }

    textoContagem.innerHTML += frasePronta;
}

const qtd = document.querySelectorAll(".Comentar");

const textareas = document.getElementsByTagName("textarea");

const contadores = document.querySelectorAll(".contadorModal");

for(let i = 0; i < textareas.length; ++i){
    qtd[i].disabled = true;
    
    textareas[i].addEventListener("input", function(){
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight}px`;
        
        text(textareas[i], contadores[i], qtd[i]);
    });
}

function search_galaxy() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('universe col');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}