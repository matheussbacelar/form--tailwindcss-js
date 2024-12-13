const errorName = document.querySelector("#errorName");
const errorAge = document.querySelector("#errorAge");
const errorLanguage = document.querySelector("#errorLanguage");
const res = document.querySelector("#res");

function send(){
    const name = document.querySelector("#username");
    const age = document.querySelector("#age");
    const language = document.querySelector("#language");

    
    if(name.value == "" || age.value == "" || language.value == ""){
        res.innerHTML = ``;
        if(name.value == "" ){
            errorName.innerHTML = "Insira um nome válido!";
        }else{
            errorName.innerHTML = "";
        }
        if(age.value == "" ){
            errorAge.innerHTML = "Insira uma idade válida!";
        }else{
            errorAge.innerHTML = "";
        }
        if(language.value == "" ){
            errorLanguage.innerHTML = "Insira uma linguagem válida!";
        }else{
            errorLanguage.innerHTML = "";
        }

    }else{
        res.innerHTML = `Olá <b>${name.value}</b>, você tem <b>${age.value}</b> anos e já está aprendendo <b>${language.value}</b>!`;
        errorName.innerHTML = "";
        errorAge.innerHTML = "";
        errorLanguage.innerHTML = "";
    }

}

