let produtos = [
    {
        nome: 'Mini triturador',
        price: 17.69,
        quantity: 1
    },
    {
        nome: 'Adesivos decorativos',
        price: 2.70,
        quantity: 1
    },
    {
        nome: 'Caneta Tinteiro de madeira',
        price: 3.16,
        quantity: 1
    },
]

let table = document.querySelector("#table")

for(let produto in produtos){
    table.innerHTML += `
        <tr>
            <td>${produtos[produto].nome}</td>
            <td>${produtos[produto].price} €</td>
            <td>
                <button id="minus">-</button>${produtos[produto].quantity}<button id="plus">+</button>
            </td>
            <td>
                <button id="removeProduct">Remover Produto</button>
            </td>
        </tr>
    `
}

let removeProduct = table.querySelector('#removeProduct')

removeProduct.addEventListener('click', function(){
    this.parentNode.parentNode.removeChild();
})

// for(let remove in removeProduct) {
//     remove.addEventListener('click', function(event){
//         table.deleteRow(remove);

//         event.preventDefault();
//     })
// }