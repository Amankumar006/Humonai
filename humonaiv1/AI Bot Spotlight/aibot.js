document.addEventListener("DOMContentLoaded", function() {
    // Discover More button scrolls to the introduction section
    document.getElementById('discover-more').addEventListener('click', function() {
        document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
    });

    // Toggle AI bot details
    document.querySelectorAll('.bot-item button').forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
                this.textContent = 'Learn More';
            } else {
                details.style.display = 'block';
                this.textContent = 'Show Less';
            }
        });
    });

    // CTA buttons for modal interaction
    document.getElementById('explore-capabilities').addEventListener('click', function() {
        openModal();
    });

    document.getElementById('choose-bot').addEventListener('click', function() {
        openModal();
    });

    // Modal functionality
    const modal = document.getElementById('quiz-modal');
    const closeModalButton = modal.querySelector('.close-button');

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
