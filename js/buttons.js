let productSizes = document.querySelectorAll('.product__size');

function activeBtn(id) {
    for (let productSize of productSizes) {
        if (productSize.classList.contains('active-1')) {
            productSize.classList.remove('active-1');
        }    
    } 

    document.getElementById(id).classList.toggle("active-1");
}