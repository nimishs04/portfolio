// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const themeSwitcher = document.getElementById('theme-switcher');
const pdfButtons = document.querySelectorAll('.pdf-btn');
const pdfViewer = document.getElementById('pdf-viewer');

// Switch content sections
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding section
        const targetSection = document.getElementById(button.dataset.target);
        targetSection.classList.add('active');
        
        // Scroll to top of content
        document.getElementById('content').scrollTop = 0;
    });
});

// Theme switcher functionality
themeSwitcher.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme', this.checked);
    // Save preference
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
});

// Mobile sidebar toggle
const mobileToggle = document.getElementById('mobile-toggle');
const sidebar = document.getElementById('sidebar');

mobileToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.body.classList.toggle('nav-open');
});

// Optional: Close sidebar when a nav link is clicked (for better UX on mobile)
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        document.body.classList.remove('nav-open');
    });
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitcher.checked = true;
}

// PDF viewer functionality
pdfButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update PDF viewer source
        pdfViewer.src = button.dataset.src;
        
        // Add visual feedback
        pdfButtons.forEach(btn => {
            btn.style.borderColor = '';
            btn.style.fontWeight = 'normal';
        });
        button.style.borderColor = '#4361ee';
        button.style.fontWeight = '600';
    });
});

// Load first PDF by default if available
if (pdfButtons.length > 0) {
    pdfButtons[0].click();
}

// Set current year in footer if needed
document.getElementById('current-year').textContent = new Date().getFullYear();
