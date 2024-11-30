// Filtragem de pesquisa
document.getElementById("search-bar").addEventListener("input", function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    let found = false;

    // Filtra os cards com base no termo de pesquisa
    cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchTerm)) {
            card.style.display = "block"; // Exibe o card
            found = true;
        } else {
            card.style.display = "none"; // Oculta o card
        }
    });

    const noResultsContainer = document.getElementById("no-results-container");

    if (!found) {
        // Se nenhum resultado for encontrado, mostra a mensagem
        let noResultsMessage = document.getElementById("no-results");
        if (!noResultsMessage) {
            noResultsMessage = document.createElement("p");
            noResultsMessage.id = "no-results";
            noResultsMessage.textContent = "Nenhum resultado encontrado."; 
            noResultsContainer.appendChild(noResultsMessage);
        }
    } else {
        // Se houver resultados, remove a mensagem
        const noResultsMessage = document.getElementById("no-results");
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
});


// Botão de voltar ao topo
window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Manipulação do formulário de sugestões
document.getElementById("form-sugestao").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que a página seja recarregada ao enviar o formulário

    const nome = document.getElementById("nome").value;
    const sugestao = document.getElementById("sugestao").value;

    if (nome && sugestao) {
        alert("Obrigado pela sua sugestão, " + nome + "! A sua sugestão foi recebida.");

        // Limpar o formulário após o envio
        document.getElementById("form-sugestao").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
