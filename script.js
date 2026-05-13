const form = document.getElementById("playerForm");
const playersList = document.getElementById("playersList");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const photo = document.getElementById("photo").files[0];

    const reader = new FileReader();

    reader.onload = function(){

        const playerCard = document.createElement("div");

        playerCard.classList.add("player-card");

        playerCard.innerHTML = `
            <img src="${reader.result}">
            <h3>${name}</h3>
            <p>${position}</p>
        `;

        playersList.appendChild(playerCard);

    };

    reader.readAsDataURL(photo);

    form.reset();

});