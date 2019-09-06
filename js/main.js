const nome = document.querySelector("#nome");
const endereco = document.querySelector("#endereco");
const cidade = document.querySelector("#cidade");
const telefone = document.querySelector("#telefone");
const celular = document.querySelector("#celular");
const email = document.querySelector("#email");
const profissao = document.querySelector("#profissao");
const rg = document.querySelector("#rg");
const cnh = document.querySelector("#cnh");
const cpf = document.querySelector("#cpf");
const titulo = document.querySelector("#tituloEleitor");
const passaporte = document.querySelector("#numeroPas");

MaskJS(nome).mascararPalavras();
MaskJS(endereco).mascararAlfanumerico();
MaskJS(cidade).mascararLetras();
MaskJS(telefone).mascararPadrao("(99) 9999-9999");
MaskJS(celular).mascararPadrao("(99) 9 9999-9999");
MaskJS(profissao).mascararPalavras();
MaskJS(rg).mascararNumero();
MaskJS(cnh).mascararPadrao("99999999999");
MaskJS(cpf).mascararPadrao("999.999.999-99");
MaskJS(titulo).mascararPadrao("9999 9999 9999");
MaskJS(passaporte).mascararPadrao("AA999999");

const validarEmail = e => {
    let padrao = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;

    return padrao.test(e);
}

