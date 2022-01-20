function carrinho() {
    
    let nome = document.querySelector("#nomeProduto").value
    let descricao = document.querySelector("#descricao").value
    let preco = document.querySelector("#price").value

    let table = document.querySelector("table")

    table.innerHTML += `
    
        <tr>
            <td>${nome}</td>
            <td>${descricao}</td>
            <td>${preco}</td>
        </tr>
    `
    

}