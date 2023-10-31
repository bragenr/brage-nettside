document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
    var body = document.querySelector('body');
    var button = document.querySelector('.dark-mode-toggle');
    
    if(body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }

    if(body.classList.contains('dark-mode')) {
      button.textContent = '🌙'; 
    } else {
      button.textContent = '🌞'; 
    }
});