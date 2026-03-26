<script>
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.querySelector('.scroll-btn');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#projects');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
</script>
