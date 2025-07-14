// Apply dark mode on page load if previously set
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

const toggle = document.getElementById('dark-mode-toggle');
if (toggle) {
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}


