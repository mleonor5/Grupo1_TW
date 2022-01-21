/*************************************MENU*************************************/
let menuList = document.getElementById("menuList");

menuList.style.maxHeight = '0px';

function menu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "200px"
    }else{
        menuList.style.maxHeight = "0px";
    }
}

/*************************************FORM*************************************/
let form = document.querySelector('.opinionForm')

form.addEventListener('submit', function(event){

    let comentario = document.querySelector('#comentario').value;
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let p = document.querySelector('#opinionText')

    if(comentario == "" || name == "" || email == ""){
        p.innerHTML = 'Tem que preencher todos os campos'
    }else{
        p.innerHTML = 'Mensagem enviada! Entraremos em contacto em breve.'
    }
    event.preventDefault();
})