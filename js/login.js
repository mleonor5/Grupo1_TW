let utilizadores = [
    {nome:"Leonor", login: "marialeonor@gmail.com", genero:"Feminino", morada:"Vila do Conde", telemovel:"123456789", senha: "leonormaria"},
    {login: "fabiofernandes@gmail.com", senha: "fernandes"},
    {login: "joaorocha@gmail.com", senha: "rochajoao"},
];

let form = document.querySelector('.form')

form.addEventListener('submit', function(event){

    let email = document.querySelector('#txtEmail').value
    let pass = document.querySelector('#txtPassword').value

    let editName = document.querySelector('#editName')
    let editEmail = document.querySelector('#editEmail')
    let editGenero = document.querySelector('#editGender')
    let editMorada = document.querySelector('#editMorada')
    let editTelemovel = document.querySelector('#editNumber')
    let editPass = document.querySelector('#editPassword')

    for (let user in utilizadores){
        if(utilizadores[user].login == email && utilizadores[user].senha == pass){
            alert(`Bem-vindo ${utilizadores[user].nome}`)
            editName.value = utilizadores[user].nome
            editEmail.value = utilizadores[user].login
            editGenero.value = utilizadores[user].genero
            editMorada.value = utilizadores[user].morada
            editTelemovel.value = utilizadores[user].telemovel
            editPass.value = utilizadores[user].senha
            window.location = '../index.html'
            break
        }else{
            alert(`Dados incorretos, tente novamente`)
        }
    }

    event.preventDefault()

})