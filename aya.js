document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
        // Remove active class from all thumbnails
        document.querySelectorAll('.thumbnail').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Update main image
        const mainImage = document.querySelector('.main-image');
        const thumbImage = this.querySelector('img');
        mainImage.src = thumbImage.src;
    });
});