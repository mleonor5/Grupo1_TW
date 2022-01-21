let dados = {
    nome:"Leonor", 
    login: "marialeonor@gmail.com", 
    genero:"Feminino", 
    morada:"Vila do Conde", 
    telemovel:"123456789", 
    senha: "leonormaria"
};

let editName = document.querySelector("#editName")
let editEmail = document.querySelector("#editEmail")
let editGender = document.querySelector("#editGender")
let editMorada = document.querySelector("#editMorada")
let editNumber = document.querySelector("#editNumber")
let editPassword = document.querySelector("#editPassword")

editName.value = dados.nome
editEmail.value = dados.login
editGender.value = dados.genero
editMorada.value = dados.morada
editNumber.value = dados.telemovel
editPassword.value = dados.senha