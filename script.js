
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark);
    if (isDark) {
        document.body.classList.add('dark');
        toggleBtn.textContent = '🌚';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        toggleBtn.textContent = isDarkMode ? '🌚' : '🌞';
    });
});
