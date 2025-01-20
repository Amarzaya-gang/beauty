let box = document.querySelector('box');
window.onmousemove = function(e){
    let x = e.clientX/3;
    box.computedStyleMap.transform="perspective(1000px) rotateY(" + x + "deg)";   
}

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}