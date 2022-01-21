let dados = {
    nome:"Leonor", 
    login: "marialeonor@gmail.com", 
    genero:"Feminino", 
    morada:"Vila do Conde", 
    telemovel:"123456789", 
    senha: "leonormaria"
};

let editForm = document.querySelector('.editUser')
let text = document.querySelector('#textEdit')

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

editForm.addEventListener('submit', function(event){

    if((editName.value != dados.nome) || (editEmail.value != dados.login) || (editGender.value != dados.genero) || (editMorada.value != dados.morada) || (editNumber.value != dados.telemovel) || (editPassword.value != dados.senha)){
        document.querySelector('#editName').value = editName.value
        document.querySelector('#editEmail').value = editEmail.value
        document.querySelector('#editGender').value = editGender.value
        document.querySelector('#editMorada').value = editMorada.value
        document.querySelector('#editNumber').value = editNumber.value
        document.querySelector('#editPassword').value = editPassword.value

        text.innerHTML = 'Dados alterados com sucesso!'

        console.log('Alterado')
    }

    event.preventDefault()
})