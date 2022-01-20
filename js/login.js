let utilizadores = [
    {login: "marialeonor@gmail.com", senha: "leonormaria"},
    {login: "fabiofernandes@gmail.com", senha: "fernandes"},
    {login: "joaorocha@gmail.com", senha: "rochajoao"},
];

let form = document.querySelector('.form')

form.addEventListener('submit', function(event){

    let email = document.querySelector('#txtEmail').value
    let pass = document.querySelector('#txtPassword').value

    for (let user in utilizadores){
        if(utilizadores[user].login == email && utilizadores[user].senha == pass){
            alert(`Bem-vindo ${email}`)
            window.location = '../index.html'
            break
        }else{
            alert(`Dados incorretos, tente novamente`)
        }
    }

    event.preventDefault()

})