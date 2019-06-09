let toggle_btns = document.querySelectorAll('.btn.js_toggle');
let products_type = {
    'desktop': document.querySelectorAll('#desktop .js_toggle'),
    'web': document.querySelectorAll('#web .js_toggle'),
}
toggle_btns.forEach(btn =>{
    btn.addEventListener('click', event=>{
        if(event.target.classList.contains('selected')) return;
        let type = event.target.getAttribute("data-type"); // either web or desktop
        products_type[type].forEach(p=>{
            p.classList.toggle('selected');
        });
    });
});