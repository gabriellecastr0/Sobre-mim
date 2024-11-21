document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function () {
        // Pega o ID da seção alvo do atributo "data-target"
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        // Remove a classe 'active' de todas as seções
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' apenas à seção correspondente
        if (targetElement) {
            targetElement.classList.add('active');
        }
    });
});