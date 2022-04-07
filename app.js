var imgs = document.querySelectorAll('.image img')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var close = document.querySelector('.close')
var galleryimg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showgallery() {
    if(currentIndex == 0) {
        left.classList.add('hide')
    } else {
        left.classList.remove('hide')
    }
    if(currentIndex == imgs.length-1) {
        right.classList.add('hide')
    } else {
        right.classList.remove('hide')
    }
    galleryimg.src = imgs[currentIndex].src
    gallery.classList.add('show')
}

imgs.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index
        showgallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

left.addEventListener('click', function(){
    if(currentIndex > 0) {
        currentIndex--
        showgallery()
    }

})

right.addEventListener('click', function(){
    if(currentIndex < imgs.length - 1) {
        currentIndex++
        showgallery()
    }

})


