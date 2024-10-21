function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Adiciona ou remove a classe 'active'
    console.log('Sidebar toggled:', sidebar.classList.contains('active')); // Log para depuração
}

// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Obtém o destino do link
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Faz a rolagem suave até o elemento alvo
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Fecha a sidebar
        toggleSidebar();
    });
});
