let btn_jadwal = document.querySelector('#btn_jadwal');
let btn_schedual = document.querySelector('#btn_schedual');
let pcs = document.querySelectorAll('.pc');
let descs = document.querySelectorAll('.desc');
btn_jadwal.addEventListener('click', (event) => {
    displayDescription(btn_jadwal, btn_schedual);
});

btn_schedual.addEventListener('click', (event)=>{
    displayDescription(btn_schedual, btn_jadwal);
});

function displayDescription(target, old_target, desc, old_desc){
    if (!target.classList.contains('select')) {
        target.classList.add('select');
        old_target.classList.remove('select');
    }

    descs.forEach((desc)=>{
        desc.classList.toggle('visible');
    });
    pcs.forEach((pc)=>{
        pc.classList.toggle('visible');
    });    
}