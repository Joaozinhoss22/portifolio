document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle-switch');
    const body = document.body;

    // Verifica se há uma preferência de tema salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggle.checked = true;
        } else {
            body.classList.remove('light-theme');
            themeToggle.checked = false;
        }
    }

    // Adiciona o evento de mudança ao interruptor
    themeToggle.addEventListener('change', (event) => {
        if (event.target.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});

// Função para o botão "Voltar ao Topo"
    // Seleciona o botão
    const btnTop = document.getElementById('btn-top');

    // Mostra ou esconde o botão dependendo da posição de rolagem
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    };

    // Adiciona a funcionalidade de clique para rolar para o topo
    btnTop.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Animação de rolagem suave
        });
    });

    