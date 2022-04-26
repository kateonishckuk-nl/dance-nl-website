let productSize1 = document.querySelector('.product__size:nth-of-type(1)');
let productSize2 = document.querySelector('.product__size:nth-of-type(2)');
let productSize3 = document.querySelector('.product__size:nth-of-type(3)');

productSize1.addEventListener('click', function() {
    productSize1.classList.toggle('active-1');
    productSize2.classList.remove('active-1');
    productSize3.classList.remove('active-1');
});

productSize2.addEventListener('click', function() {
    productSize2.classList.toggle('active-1');
    productSize1.classList.remove('active-1');
    productSize3.classList.remove('active-1');
});

productSize3.addEventListener('click', function() {
    productSize3.classList.toggle('active-1');
    productSize1.classList.remove('active-1');
    productSize2.classList.remove('active-1');
})