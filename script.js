document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Smooth header shading on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Handle the download button click since the APK isn't exported yet
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Stop the page from reloading or jumping
            alert("Eduquest is currently in active testing on the Android simulator! The download link will go live right here as soon as the official build drops. Stay tuned!");
        });
    }
});