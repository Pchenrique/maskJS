const nome = document.querySelector("#nome_cad");
const endereco = document.querySelector("#endereco");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");
const telefone = document.querySelector("#telefone");
const celular = document.querySelector("#celular");
const email = document.querySelector("#email");
const profissao = document.querySelector("#profissao");
const rg = document.querySelector("#rg");
const cnh = document.querySelector("#cnh");
const cpf = document.querySelector("#cpf");
const titulo = document.querySelector("#titulo");
const passaporte = document.querySelector("#numeroPas");
const button = document.querySelector("#pass");

const campoPassaporte = document.querySelector(".classPassaporte");

//span erros 
const erroEmail = document.querySelector("#erroEmail");
const erroNome = document.querySelector("#erroNome");
const erroTelefone = document.querySelector("#erroTelefone");
const erroCelular = document.querySelector("#erroCelular");
const erroCampo = document.querySelector("#erroCampo");
const erroRg = document.querySelector("#erroRg");
const erroCpf = document.querySelector("#erroCpf");
const erroCnh = document.querySelector("#erroCnh");
const erroTitulo = document.querySelector("#erroTitulo");
const erroPassaporte = document.querySelector("#erroPassaporte");

MaskJS(nome).mascararPalavras();
MaskJS(endereco).mascararAlfanumerico();
MaskJS(cidade).mascararPalavras();
MaskJS(uf).mascararUf();
MaskJS(telefone).mascararPadrao("(99) 9999-9999");
MaskJS(celular).mascararPadrao("(99) 9 9999-9999");
MaskJS(profissao).mascararPalavras();
MaskJS(rg).mascararNumero();
MaskJS(cnh).mascararPadrao("99999999999");
MaskJS(cpf).mascararPadrao("999.999.999-99");
MaskJS(titulo).mascararPadrao("9999 9999 9999");
MaskJS(passaporte).mascararPadrao("AA999999");


const validarNome = function(nome){
    let valor = nome.length;

    if(valor >= 10){
        erroNome.innerText = "";
    }else if(valor == 0){
        erroNome.innerText = "Campo precisa ser preenchido!";
    }else{
        erroNome.innerText = "Nome incompleto!";
    }
}

const validarTelefone = function(telefone){
    let valor = telefone.length;

    if(valor < 14 && valor > 0){
        erroTelefone.innerText = "Telefone incompleto!";
    }else if(valor == 0){
        erroTelefone.innerText = "Campo precisa ser preenchido!";
    }else{
        erroTelefone.innerText = "";
    }
}

const validarCelular = function(celular){
    let valor = celular.length;

    if(valor < 16 && valor > 0){
        erroCelular.innerText = "Celular incompleto!";
    }else if(valor == 0){
        erroCelular.innerText = "Campo precisa ser preenchido!";
    }else{
        erroCelular.innerText = "";
    }
}

const validarCampo = function(campo){
    if(campo == "Trabalho" || campo == "Estudo" || campo == "Turismo" || campo == "Sair do Pais"){
        erroCampo.innerText = "";
    }else{
        erroCampo.innerText = "Motivo Invalido!";
    }
}

const validarRg = function(rg){
    if(rg.length < 6 && rg.length > 0){
        erroRg.innerText = "RG Inválido";
    }else if(rg.length == 0){
        erroRg.innerText = "Campo precisa ser preenchido!";
    }else{
        erroRg.innerText = "";
    }
}

const validarCnh = function(cnh){
    if(cnh.length < 11 && cnh.length > 0){
        erroCnh.innerText = "CNH Inválido";
    }else if(cnh.length == 0){
        erroCnh.innerText = "Campo precisa ser preenchido!";
    }else{
        erroCnh.innerText = "";
    }
}

const validarCpf = function(cpf){
    if(cpf.length < 14 && cpf.length > 0){
        erroCpf.innerText = "CPF Inválido";
    }else if(cpf.length == 0){
        erroCpf.innerText = "Campo precisa ser preenchido!";
    }else{
        erroCpf.innerText = "";
    }
}

const validarTitulo = function(titulo){
    if(titulo.length < 14 && titulo.length > 0){
        erroTitulo.innerText = "Titulo de Eleitor Inválido";
    }else if(titulo.length == 0){
        erroTitulo.innerText = "Campo precisa ser preenchido!";
    }else{
        erroTitulo.innerText = "";
    }
}

const validarPassaporte = function(passaporte){
    if(passaporte.length < 8 && passaporte.length > 0){
        erroPassaporte.innerText = "Passaporte Inválido";
    }else if(passaporte.length == 0){
        erroPassaporte.innerText = "Campo precisa ser preenchido!";
    }else{
        erroPassaporte.innerText = "";
    }
}

const validarEmail = e => {
    let padrao = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;

    if(padrao.test(e)){
        erroEmail.innerText = "";
    }else if(e.length == 0){
        erroEmail.innerText = "Campos precisa ser preenchido!";
    }else{
        erroEmail.innerText = "Email Inválido!";
    }
    //return padrao.test(e);
}

const mostrarCampoPassaporte = function(valor){
    if(valor == "sim"){
        campoPassaporte.style.display = "block";
    }else{
        campoPassaporte.style.display = "none";
    }
}

const validarButton = function(){
    
}

