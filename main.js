document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.content-section');
    const mainSections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.icon-container');
    const menuIcon = document.getElementById('menu-icon');
    const navBar = document.getElementById('nav-icon-bar');
    

    
       

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.getAttribute('id') === sectionId) {
                    section.classList.add('active');
                }
            });

            mainSections.forEach(mainSection => {
                mainSection.classList.remove('active');
                if (mainSection.getAttribute('id') === sectionId + '-main') {
                    mainSection.classList.add('active');
                }
            });

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            if (window.innerWidth <= 768) {
                navBar.classList.remove('active');
            }
        });

    });

    menuIcon.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

   
 });