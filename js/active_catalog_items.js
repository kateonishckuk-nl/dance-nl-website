const catalog_tags = document.querySelectorAll('.catalog');
let paginationBtns = document.querySelectorAll('.pagination__list-btn');
let paginationBlock = document.querySelector('.pagination__wrap');

let n = "";
let catalog_item;

function activeCatalogItem(id) {

    if (id === '-1a' || id === '-1b' || id === '-1c' || id === '-1d' || id === '-1e' || id === '-1f' || id === '-1g') {
        n = "catalog" + id;
        catalog_item = document.getElementById(n);
    
        for (let catalog_tag of catalog_tags) {
            catalog_tag.style.display = 'none';
        }
    
        if (catalog_item.style.display === 'none') {
            catalog_item.style.display = 'flex';
        } else {
            catalog_item.style.display = 'none';
        }

        for (let paginationBtn of paginationBtns) {
            if (paginationBtn.classList.contains('active-pagination')) {
                paginationBtn.classList.remove('active-pagination');
            }    
        }

        document.getElementById(id).classList.toggle('active-pagination');
    } else {
        n = "catalog" + id;
        let catalog_item = document.getElementById(n);
    
        for (let catalog_tag of catalog_tags) {
            catalog_tag.style.display = 'none';
        }
    
        if (catalog_item.style.display === 'none') {
            catalog_item.style.display = 'flex';
        } else {
            catalog_item.style.display = 'none';
        }
    }

    if (id === '-2' || id === '-3' || id === '-4' || id === '-5' || id === '-6' || id === '-7' || id === '-8') {
        paginationBlock.style.display = 'none';
    } else {
        paginationBlock.style.display = 'block';
    }
}