let utilizadores = [
    {nome:"Leonor", login: "marialeonor@gmail.com", genero:"Feminino", morada:"Vila do Conde", telemovel:"123456789", senha: "leonormaria"},
    {nome:"Fabio", login: "fabiofernandes@gmail.com", genero:"Masculino", morada:"Vila de Conde", telemovel:"234567890", senha: "fernandes"},
    {nome: "João", login: "joaorocha@gmail.com", genero:"Masculino", morada:"Vila de Conde", senha: "rochajoao"},
];

let form = document.querySelector('.form')

form.addEventListener('submit', function(event){

    let email = document.querySelector('#txtEmail').value
    let pass = document.querySelector('#txtPassword').value

    for (let user in utilizadores){
        if(utilizadores[user].login == email && utilizadores[user].senha == pass){
            alert(`Bem-vindo ${utilizadores[user].nome}`)
            window.location = '../index.html'
            break
        }else{
            alert(`Dados incorretos, tente novamente`)
        }
    }

    event.preventDefault()

})