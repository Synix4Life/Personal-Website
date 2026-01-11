document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-subcaption.toggle').forEach(header => {
        header.addEventListener('click', () => {
            const container = header.nextElementSibling;

            if (!container) return;

            container.classList.toggle('hidden');
            header.classList.toggle('open');
        });
    });
});
