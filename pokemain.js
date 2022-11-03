
let form = document.querySelector('#pokeForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokemon = event.path[0][0].value
    console.log(pokemon);
    loadPokemon(pokemon);
    form.reset();
})

let getPokemon = async (pokemon)=> {
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

let loadPokemon = async (pokemon) => {
    let data = await getPokemon(pokemon);
    console.log(data);
    let new_rows = `<tr><td scope='row' style="text-align: center;" >${(data.forms[0].name).toUpperCase()}</td></tr><tr><td scope='row'><img src=${data.sprites.other["official-artwork"].front_default}
    style="width: 18rem; margin: auto; display: block;"></td></tr>`;
    document.getElementById('pokemonBody').insertAdjacentHTML('afterend', new_rows);
}

let clearPokemon = () => {
    document.getElementById('pokemonBody'),innerHTML='';
}