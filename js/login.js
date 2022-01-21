let utilizadores = [
    {nome:"Leonor", login: "marialeonor@gmail.com", genero:"Feminino", morada:"Vila do Conde", telemovel:"123456789", senha: "leonormaria"},
    {nome:"Fabio", login: "fabiofernandes@gmail.com", genero:"Masculino", morada:"Vila de Conde", telemovel:"234567890", senha: "fernandes"},
    {nome: "João", login: "joaorocha@gmail.com", genero:"Masculino", morada:"Vila de Conde", telemovel:"345678901", senha: "rochajoao"},
];

let form = document.querySelector('.form')

form.addEventListener('submit', function(event){

    let email = document.querySelector('#txtEmail').value
    let pass = document.querySelector('#txtPassword').value
    let helloUser = document.querySelector('#helloUser')
    let loginText = document.querySelector('#loginText')

    for (let user in utilizadores){
        if(utilizadores[user].login == email && utilizadores[user].senha == pass){
            helloUser.innerHTML = `Bem-vindo ${utilizadores[user].nome}`
            window.setTimeout(function(){
                window.location = '../index.html'
            }, 5000);
            break
        }else{
            loginText.innerHTML = 'Palavra-passe ou Email incorretos!'
        }
    }

    event.preventDefault()

})