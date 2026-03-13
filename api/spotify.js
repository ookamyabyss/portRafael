export default async function handler(req, res) {

try{

const client_id = '814936da6fca4b48813aa5b77b261cff'
const client_secret = '25b1d8b76fa2412984d25a1edbff4bc6'
const refresh_token = 'AQBvT0oVWRsxrvDcd6i1Ai2qm_Qbuw4Pt2qKbX2VYqU-xrDJwxlFfs3XGd1feyMrql51YEbqxD8XdSq0t-8nyU5m7kv8a8UdDYLkMq-zGK25BoBAfjJmi7NQNi5JE9tS1yg'

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")

const tokenResponse = await fetch(
"https://accounts.spotify.com/api/token",
{
method:"POST",
headers:{
Authorization:`Basic ${basic}`,
"Content-Type":"application/x-www-form-urlencoded"
},
body:new URLSearchParams({
grant_type:"refresh_token",
refresh_token:refresh_token
})
}
)

const tokenData = await tokenResponse.json()

const nowPlaying = await fetch(
"https://api.spotify.com/v1/me/player/currently-playing",
{
headers:{
Authorization:`Bearer ${tokenData.access_token}`
}
}
)

if(nowPlaying.status === 204){

return res.status(200).json({isPlaying:false})

}

const song = await nowPlaying.json()

return res.status(200).json({

isPlaying:true,
artist:song.item.artists[0].name,
song:song.item.name

})

}catch(error){

return res.status(500).json({
error:"spotify api error",
details:error.message
})

}

}