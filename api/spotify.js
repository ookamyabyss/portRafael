export default async function handler(req, res) {

const client_id = '814936da6fca4b48813aa5b77b261cff'
const client_secret = '25b1d8b76fa2412984d25a1edbff4bc6'
const refresh_token = 'AQBvT0oVWRsxrvDcd6i1Ai2qm_Qbuw4Pt2qKbX2VYqU-xrDJwxlFfs3XGd1feyMrql51YEbqxD8XdSq0t-8nyU5m7kv8a8UdDYLkMq-zGK25BoBAfjJmi7NQNi5JE9tS1yg'
const tokenResponse = await fetch(
"https://accounts.spotify.com/api/token",
{
method:"POST",
headers:{
"Authorization":`Basic ${basic}`,
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
return res.json({isPlaying:false})
}

const song = await nowPlaying.json()

res.json({
isPlaying:true,
artist:song.item.artists[0].name,
song:song.item.name
})

}