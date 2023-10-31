document.addEventListener('DOMContentLoaded', function() {
    var body = document.querySelector('body');
    var button = document.querySelector('.dark-mode-toggle');

    if(localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        button.textContent = '🌙';
    } else {
        body.classList.remove('dark-mode');
        button.textContent = '🌞';
    }

    button.addEventListener('click', function() {
        if(body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            button.textContent = '🌞';
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            button.textContent = '🌙';
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});