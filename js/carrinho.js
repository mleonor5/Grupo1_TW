let btnAdd = document.addEventListener('click', function(event) {

    let imgProduto = document.querySelector('#imgProduto').value;
    let productName = document.querySelector('#nomeProduto').value;
    let productPrice = document.querySelector('#price').value;
    let quantity = 0

    let table = document.querySelector('#table')

    table.innerHTML += `
        <tr>
            <td>${imgProduto} ${productName}</td>
            <td>${productPrice}</td>
            <td>${quantity}</td>
        </tr>
    `
    event.preventDefault();
})