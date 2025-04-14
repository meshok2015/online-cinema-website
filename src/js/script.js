
document.addEventListener('DOMContentLoaded', function() {
    const watchBtn = document.getElementById('watchMovieBtn');
    const videoModal = document.getElementById('videoModal');

    const movieVideo = document.getElementById('movieVideo');

    watchBtn.addEventListener('click', () => {
        videoModal.classList.add('active');
        movieVideo.play();
    });

    closeBtn.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            closeModal();
        }
    });

    function closeModal() {
        videoModal.classList.remove('active');
        movieVideo.pause();
        movieVideo.currentTime = 0;
    }
});
