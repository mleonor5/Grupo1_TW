let form = document.querySelector('#form')
let users = []

form.addEventListener('submit', function(event){

    let name = document.querySelector('#txtName').value
    let email = document.querySelector('#txtEmail').value
    let gender = document.querySelector('#gender').value
    let morada = document.querySelector('#txtMorada').value
    let number = document.querySelector('#txtNumber').value
    let pass = document.querySelector('#txtPassword').value

    if (name == "" || email == "" || pass == "" || gender == "" || morada == "" || number == ""){
        alert("Preencha os campos corretamente")
    }else{
        users.push(
            {UserName: `${name}`, UserEmail: `${email}`, UserGender: `${gender}`, UserMorada: `${morada}`, UserNumber: `${number}`, UserPass: `${pass}`},
        )
        console.log(users)
    }

    event.preventDefault()
})