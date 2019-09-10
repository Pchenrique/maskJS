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
const button1 = document.querySelector("#pasn");
const campo = document.querySelector("#motivo");

const campoPassaporte = document.querySelector(".classPassaporte");

const buttonCadastrar = document.querySelector("#buttonCadastrar");

const form = document.querySelector(".container .content form");

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
const erroEndereco = document.querySelector("#erroEndereco");
const erroCidade = document.querySelector("#erroCidade");
const erroUf = document.querySelector("#erroUf");
const erroProfissao = document.querySelector("#erroProfissao");
const erroButton = document.querySelector("#erroButton");

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

let temErro = true;

nome.onblur = function () {
    if (nome.value.length >= 10) {
        erroNome.innerText = "";
        temErro = false;
    } else if (nome.value.length == 0) {
        temErro = true;
        erroNome.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = true;
        erroNome.innerText = "Nome incompleto!";
    }
}

endereco.onblur = function () {
    if (endereco.value.length == 0) {
        temErro = true;
        erroEndereco.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroEndereco.innerText = "";
    }
}

cidade.onblur = function () {
    if (cidade.value.length == 0) {
        temErro = true;
        erroCidade.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroCidade.innerText = "";
    }
}

uf.onblur = function () {
    if (uf.value.length < 2 && uf.value.length > 0 || uf.value.length > 0 && uf.value.length > 2) {
        temErro = true;
        erroUf.innerText = "UF inválido!";
    } else if (uf.value.length == 0) {
        temErro = true;
        erroUf.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroUf.innerText = "";
    }
}

telefone.onblur = function () {
    if (telefone.value.length < 14 && telefone.value.length > 0) {
        temErro = true;
        erroTelefone.innerText = "Telefone incompleto!";
    } else if (telefone.value.length == 0) {
        temErro = true;
        erroTelefone.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroTelefone.innerText = "";
    }
}

celular.onblur = function () {
    if (celular.value.length < 16 && celular.value.length > 0) {
        temErro = true;
        erroCelular.innerText = "Celular incompleto!";
    } else if (celular.value.length == 0) {
        temErro = true;
        erroCelular.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroCelular.innerText = "";
    }
}

email.onblur = function () {
    let padrao = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;

    if (padrao.test(email.value)) {
        temErro = false;
        erroEmail.innerText = ""; 
    } else if (email.value.length == 0) {
        temErro = true;
        erroEmail.innerText = "Campos precisa ser preenchido!";
    } else {
        temErro = true;
        erroEmail.innerText = "Email Inválido!";
    }
}

profissao.onblur = function () {
    if (profissao.value.length == 0) {
        temErro = true;
        erroProfissao.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroProfissao.innerText = "";
    }
}

rg.onblur = function () {
    if (rg.value.length < 6 && rg.value.length > 0) {
        temErro = true;
        erroRg.innerText = "RG Inválido";
    } else if (rg.value.length == 0) {
        temErro = true;
        erroRg.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroRg.innerText = "";
    }
}

cnh.onblur = function () {
    if (cnh.value.length < 11 && cnh.value.length > 0) {
        temErro = true;
        erroCnh.innerText = "CNH Inválido";
    } else if (cnh.value.length == 0) {
        temErro = true;
        erroCnh.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroCnh.innerText = "";
    }
}

cpf.onblur = function () {
    if (cpf.value.length < 14 && cpf.value.length > 0) {
        temErro = true;
        erroCpf.innerText = "CPF Inválido";
    } else if (cpf.value.length == 0) {
        temErro = true;
        erroCpf.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroCpf.innerText = "";
    }
}

titulo.onblur = function () {
    if (titulo.value.length < 14 && titulo.value.length > 0) {
        temErro = true;
        erroTitulo.innerText = "Titulo de Eleitor Inválido";
    } else if (titulo.value.length == 0) {
        temErro = true;
        erroTitulo.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroTitulo.innerText = "";
    }
}

campo.onblur = function () {
    if (campo.value == "Trabalho" || campo.value == "Estudo" || campo.value == "Turismo" || campo.value == "Sair do Pais") {
        temErro = false;
        erroCampo.innerText = "";
    } else {
        temErro = true;
        erroCampo.innerText = "Motivo Invalido!";
    }
}

const verificarButton = function(valor) {
    if (valor == "sim") {
        campoPassaporte.style.display = "block";
    } else {
        campoPassaporte.style.display = "none";
    }
}

passaporte.onblur = function () {
    if (passaporte.value.length < 8 && passaporte.value.length > 0) {
        temErro = true;
        erroPassaporte.innerText = "Passaporte Inválido";
    } else if (passaporte.value.length == 0) {
        temErro = true;
        erroPassaporte.innerText = "Campo precisa ser preenchido!";
    } else {
        temErro = false;
        erroPassaporte.innerText = "";
    }
}

const verificar = function () {
    if (nome.value.length == 0) {
        temErro = true;
        erroNome.innerText = "Campo precisa ser preenchido!";
    }else if(nome.value.length > 0 && nome.value.length < 10){
        temErro = true;
        erroNome.innerText = "Nome Incompleto";
    }
    if (endereco.value.length == 0) {
        temErro = true;
        erroEndereco.innerText = "Campo precisa ser preenchido!";
    }
    if (cidade.value.length == 0) {
        temErro = true;
        erroCidade.innerText = "Campo precisa ser preenchido!";
    }
    if (uf.value.length == 0) {
        temErro = true;
        erroUf.innerText = "Campo precisa ser preenchido!";
    }
    if(telefone.value.length == 0){
        temErro = true;
        erroTelefone.innerText = "Campo precisa ser preenchido!";
    }
    if(celular.value.length == 0){
        temErro = true;
        erroCelular.innerText = "Campo precisa ser preenchido!";
    }
    if(email.value.length == 0){
        temErro = true;
        erroEmail.innerText = "Campo precisa ser preenchido!";
    }
    if(profissao.value.length == 0){
        temErro = true;
        erroProfissao.innerText = "Campo precisa ser preenchido!";
    }
    if(rg.value.length == 0){
        temErro = true;
        erroRg.innerText = "Campo precisa ser preenchido!";
    }
    if(cnh.value.length == 0){
        temErro = true;
        erroCnh.innerText = "Campo precisa ser preenchido!";
    }
    if(cpf.value.length == 0){
        temErro = true;
        erroCpf.innerText = "Campo precisa ser preenchido!";
    }
    if(titulo.value.length == 0){
        temErro = true;
        erroTitulo.innerText = "Campo precisa ser preenchido!";
    }
    if(campo.value == "Trabalho" || campo.value == "Estudo" || campo.value == "Turismo" || campo.value == "Sair do Pais"){

    }else{
        temErro = true;
        erroCampo.innerText = "Motivo Inválido!";
    }
    if(button.checked==true && passaporte.value.length == 0){
        temErro = true;
        erroPassaporte.innerText = "Campo precisa ser preenchido!"; 
    }else if(button1.checked==true){
        temErro = false;
        erroPassaporte.innerText = "";
    }
}

form.onsubmit = function (e) {
    if (temErro == true) {
        e.preventDefault();
        erroButton.innerText = "Existem Campos Errados!";
    }
}

