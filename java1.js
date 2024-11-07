 
        function showSection(sectionId) {
            const sections = document.querySelectorAll('main');
            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        }
    
