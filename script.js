
//Interação com APi do Github para pegar foto e nome do user
async function fetchGitHubUser() {
    let inputValue = document.getElementById("user").value;
    if (!inputValue) {
      return; // Não faça nada se o campo de entrada estiver vazio
    }
    let apiUrl = "https://api.github.com/users/" + inputValue;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const userData = await response.json();
        document.getElementById("userAvatar").src = userData.avatar_url;
      } else {
        console.error("Erro ao buscar usuário:", response.status);
        document.getElementById("userAvatar").src = "";
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      document.getElementById("userAvatar").src = "";
    }
  }

  // Adicione um evento de escuta para o evento.
  document.getElementById("user").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchGitHubUser();
    }
  });

// ------------ ANIMAÇÃO DO TEMA ---------------

//Animação do botão light/dark
const toggleButton = document.getElementById('theme-toggle-btn');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark'); 
});

//Trocando todas as classes ligh para dark
document.addEventListener('DOMContentLoaded', function(){
    let isDarkMode = false;

    toggleButton.addEventListener('click', function(){
        const body = document.body;

        body.classList.toggle('dark');

    
        const elements = document.querySelectorAll('.light, .dark');

        elements.forEach(function(element){
        
            element.classList.toggle('light');
            element.classList.toggle('dark');
        });

        isDarkMode = !isDarkMode;
    });
});

// Adicione um ouvinte de eventos de clique ao botão
toggleButton.addEventListener('click', () => {
    if (toggleBtn.classList.contains('light')) {
        toggleBtn.classList.remove('light');
        toggleBtn.classList.add('dark');
        
    } else {
        toggleBtn.classList.remove('dark');
        toggleBtn.classList.add('light');
    }
});

//Muda o icone do botão de tema
const icone = document.getElementById('icone');

toggleButton.addEventListener('click', function() {
    const iconeAtual = icone.getAttribute("src");
    
    if (iconeAtual === "/icons/MoonStars.png") {
        icone.setAttribute('src', '../icons/Sun.png');
    } else {
        icone.setAttribute('src', '../icons/MoonStars.png');
    }
});