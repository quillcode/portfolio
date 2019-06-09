let toggle_btns = document.querySelectorAll('.btn.js_toggle');
toggle_btns.forEach(btn =>{
    let id = btn.getAttribute("data-type"); // either web or desktop
    let products = document.querySelectorAll('#'+id+ ' .js_toggle');
    btn.addEventListener('click', e=>{
        if(btn.classList.contains('selected')) return;
        products.forEach(p=>{
            p.classList.toggle('selected');
        });
    });
});