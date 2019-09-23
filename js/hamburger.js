document.getElementById("hamburger").addEventListener('click', function(){
    document.getElementById("navOverlay").classList.toggle("hidden")
})

document.getElementById("navOverlay").addEventListener('click', function(){
    document.getElementById("navOverlay").classList.toggle("hidden")
})

window.addEventListener('resize', function(){
    if(window.screen.width > 920){
        document.getElementById("navOverlay").classList.add("hidden")
    }
})