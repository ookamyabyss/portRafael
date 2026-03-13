async function getSpotify(){

try{

const res = await fetch("/api/spotify")
const data = await res.json()

if(data.isPlaying){

document.querySelector(".spotify").classList.add("online")

document.querySelector(".tooltip-artist").textContent = data.artist
document.querySelector(".tooltip-song").textContent = data.song

}

}catch(err){

console.log("spotify offline")

}

}

getSpotify()
setInterval(getSpotify,10000)
