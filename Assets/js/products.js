document.addEventListener('DOMContentLoaded', ()=>{
    const productsContainer = document.querySelector('.products')
    const products = JSON.parse(localStorage.getItem('PRODUCTS'))  

    productsContainer.innerHTML = products.map(product => (`
    
    `))
})




const products = JSON.parse(localStorage.getItem('PRODUCTS'))
