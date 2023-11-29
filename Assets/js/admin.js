const hasUser = JSON.parse(localStorage.getItem('HAS_USER'))
const logoutButton = document.getElementById('logout-button')

if(!hasUser) {
    window.location = '../../index.html'
}

if (logoutButton) {
   logoutButton.addEventListener('click', () => {
    localStorage.removeItem('HAS_USER')

   })
}

const products = JSON.parse(localStorage.getItem('PRODUCTS'))

localStorage.setItem('PRODUCTS',JSON.stringify(products))

const table= document.getElementById('table-content')

document.addEventListener('DOMContentLoaded', () => {
   table.innerHTML = products.map(product => (`
   <tr>
   <td>${product.name}</td>
   <td>${product.description}</td>
   <td>${product.price}</td>
   <td>
      <button>Editar</button>
      <button class="button--delete">Eliminar</button>
   </td>
  </tr>
   
   `)).join('')
})

const form= document.getElementById('product-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const product ={
        id :products[products.length-1 ].id + 1,
        name: event.target.elements.name.value,
        price: event.target.elements.price.value,
        description: event.target.elements.description.value,
    }
    products.push(product)

    localStorage.setItem('PRODUCTS', JSON.stringify(products))

    event.target.reset()
})