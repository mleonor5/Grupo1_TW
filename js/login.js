let utilizadores = [
    {login: "marialeonor@gamil.com", senha: "leonormaria"},
    {login: "fabiofernandes@gmail.com", senha: "fernandes"},
    {login: "joaorocha@gmail.com", senha: "rochajoao"},
];

function login() {
    let email = document.getElementsById('txtEmail')[0].value.toLowerCase();
    let password = document.getElementsById('txtPassword')[0].value;

    for (let u in utilizadores) {
        let us = utilizadores[u];
        if (us.login === email && us.password === password) {
            alert('Início de sessão efetuado com sucesso!')
            window.location = "index.html";
            return true;        
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}