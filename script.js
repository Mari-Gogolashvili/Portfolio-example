const toggle = document.getElementById('darklight');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-gear');
    if(this.classList.toggle('bi-gear-wide')){
        body.style.background = '#E5E5E5';
        body.style.transition = '.2s';
    }else{
        body.style.background = '#0C151D';
        body.style.transition = '.2s';
    }
});


//JS-ს უკეთესად რომ ვისწავლი გავასწორებ 