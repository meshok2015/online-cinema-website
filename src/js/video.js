const btn   = document.getElementById('watch-movie-btn');
const module = document.getElementById('video-module');
const close = document.getElementById('close-video-btn');
const video = document.getElementById('movie-video');
    
btn.addEventListener('click', () => module.style.display = 'flex');
    
close.addEventListener('click', () => {
    module.style.display = 'none';
     video.pause();
});
