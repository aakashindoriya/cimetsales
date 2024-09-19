let currentLImit=20
let fechedData=[]
let filterdData=[]

let loadmorebutton=document.getElementById("loadmore")
loadmorebutton.addEventListener("click",()=>loadMore())
let filterByType=document.getElementById("types")
filterByType.addEventListener("change",(e)=>{
    filterResults(e.target.value)
})
let searchPokemon=document.getElementById("search")
searchPokemon.addEventListener("input",(e)=>{
    
    searchByname(e.target.value)
})





async function getdata(limit) {
    try {

        let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
        res = await res.json()
        let fetchPromises = res.results.map(async (pokemon) => {
            let result = await fetch(pokemon.url)
            return await result.json()
        });
        
        fetchPromises = await Promise.all(fetchPromises)
        fechedData=[...fetchPromises]
        
        displayPokemon(fetchPromises)
        
        
    } catch (error) {
        console.log(error)
    }

}


function displayPokemon(arr) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    arr.forEach((poke) => {
        console.log("poke",poke)
        let div = document.createElement("div")
        let card = ` <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img class="flip-img" src=${poke.sprites.other.dream_world.front_default}>
                        <p>name : ${poke.name}</>
                        <p>type : ${poke.types[0].type.name}</p>
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


function filterResults(type){
    if(type=="all"){
        filterdData=[]
        displayPokemon(fechedData)
        return
    }
    
    let res=fechedData.filter((el)=>el.types[0].type.name==type)
    filterdData=[...res]
    displayPokemon(filterdData)
    
}

function loadMore(){displayPokemon(filterdData)
    currentLImit=currentLImit+20
    getdata(currentLImit)
}
function searchByname(name){
    
    if(!name){
        if(filterdData.length<=0){
            displayPokemon(fechedData)
        }else{
            displayPokemon(filterdData)
        }
    }else{
        console.log(filterdData.length)
        if(filterdData.length>0){
            let res= filterdData.filter((el)=>el.name.includes(name))
            displayPokemon(res)
        }else{
            console.log(name,"name")
            let res= fechedData.filter((el)=>el.name.includes(name))
            displayPokemon(res)
        }
    }
   
}

getdata(currentLImit)