var btn = document.getElementById('watch-movie-btn');
var module = document.getElementById('video-module');
var close = document.getElementById('close-video-btn');
var video = document.getElementById('movie-video');


btn.onclick = function() {
    module.style.display = 'flex';
};

close.onclick = function() {
    module.style.display = 'none';
    video.pause();
};