let currentLImit=20
let fechedData=[]
async function getdata(limit=20) {
    try {

        let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=0`)
        res = await res.json()
        let fetchPromises = res.results.map(async (pokemon) => {
            let result = await fetch(pokemon.url)
            return await result.json()
        });
        fetchPromises = await Promise.all(fetchPromises)
        displayPokemon(fetchPromises)
        
    } catch (error) {
        console.log(error)
    }

}
console.log(fechedData)

function displayPokemon(arr) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    arr.forEach((poke) => {
        let div = document.createElement("div")
        let card = ` <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img class="flip-img" src=${poke.sprites.front_default}>
                        </div>
                        <div class="flip-card-back">
                        <p>height ${poke.height}</p>
                        <p>weight ${poke.weight}</p>
                        <p> base_experience ${poke.base_experience}</p>
                        </div>
                    </div>
                    </div> `
        div.innerHTML=card
        container.append(div)
    })
}


getdata()