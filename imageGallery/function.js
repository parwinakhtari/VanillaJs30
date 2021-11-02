const panels=document.querySelectorAll('.panel');
panels.forEach(panel=>
    panel.addEventListener('click',openfunc)
);
panels.forEach(panel=>panel.addEventListener('transitionend',activefunc))

function openfunc() {
    //console.log('open function called');
    this.classList.toggle('open');
}
function activefunc(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex-grow')) {
    this.classList.toggle('open-active');
    }
}