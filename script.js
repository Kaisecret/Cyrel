
document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if(mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
    }

    // --- Active Nav Link ---
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname.split('/').pop();
        
        // Clear existing active states first
        link.classList.remove('active');

        if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
            
            // Handle dropdown parent
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelector('.dropbtn').classList.add('active');
            }
        } else if (['skills.html', 'goals.html', 'funfacts.html'].includes(currentPath)) {
            const aboutBtn = document.querySelector('.dropbtn');
            if(aboutBtn) aboutBtn.classList.add('active');
        }
    });

    // --- Logout ---
    const logoutButtons = document.querySelectorAll('.logout-button');
    logoutButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.confirm("Are you sure you want to log out?")) {
                // In a real app, this would redirect to a login page.
                // For this static site, we'll just show an alert.
                alert("You have been logged out.");
                // To redirect: window.location.href = '/login.html';
            }
        });
    });

    // --- Dropdown hover for desktop, allows it to stay open when tabbing through ---
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        let timeout;

        function showDropdown() {
            clearTimeout(timeout);
            dropdownContent.style.display = 'block';
        }

        function hideDropdown() {
            timeout = setTimeout(() => {
                dropdownContent.style.display = 'none';
            }, 200);
        }

        dropbtn.addEventListener('mouseenter', showDropdown);
        dropdownContent.addEventListener('mouseenter', showDropdown);

        dropbtn.addEventListener('mouseleave', hideDropdown);
        dropdownContent.addEventListener('mouseleave', hideDropdown);
    });

});
