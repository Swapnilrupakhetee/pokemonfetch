// //fetch is a function that is used for making http requests to fetch resources.(JSON style data,images,files)
// //simplifies async data fethcing
// //interating with API's to retrive and send data asynchronously over the web
// //fetch (url,{options}) or fetch (url,{method:"GET "})

// //Fetch is promise based so it will resolve or reject
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))

//   .catch((err) => console.log(err));


//   //same but using async await


async function poki(){
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();


        const a=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!a.ok)
        {
            throw new Error("Could not retrieve the pokemon");
        }
        const data= await a.json();
        const pokemonSprite=data.sprites.front_default;
        const imgElement=document.getElementById("pokemonSprite")

        imgElement.src=pokemonSprite;
        imgElement.style.display="block";
    }
    catch(err){
        console.log(err)
    }
  }
  
