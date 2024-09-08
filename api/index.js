async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        // Display Pokemon sprite
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // Display Pokemon details
        document.getElementById("pokemonDetails").innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <p><strong>Type:</strong> ${data.types.map(type => type.type.name).join(", ")}</p>
            <p><strong>Abilities:</strong> ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
        `;
    } catch (error) {
        console.error(error);
        document.getElementById("pokemonDetails").innerHTML = `<p>Error fetching data. Please try again.</p>`;
    }
}
