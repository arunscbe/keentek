export let spriteData = [
   //FRIDGE-OPEN & CLOSE
    {
        "src":"tex/sprite-R.png",
        "posX":-35,"posY":45,"posZ":0,
        "name":"largeRoom",
        "vis":true
    },
    {
        "src":"tex/sprite-R.png",
        "posX":60,"posY":45,"posZ":90,
        "name":"mediumRoom",
        "vis":true
    },
    {
        "src":"tex/sprite-R.png",
        "posX":-35,"posY":45,"posZ":-80,
        "name":"smallRoom",
        "vis":true
    },
]
export let cameraData = {
    "largeRoom": {
        "cubePosX":-35, "cubePosY":6, "cubePosZ":0,
        "camPosX": 1,"camPosY": 1,"camPosZ": 1
    },
    "mediumRoom": {
        "cubePosX":60, "cubePosY":12, "cubePosZ":90,
        "camPosX": 80,"camPosY": 11,"camPosZ": 90
    },
    "smallRoom": {
        "cubePosX":-35, "cubePosY":12, "cubePosZ":-80,
        "camPosX": -35,"camPosY": 10,"camPosZ": -62
    },
    'backBtn':{
        "cubePosX":0, "cubePosY":0, "cubePosZ":0,
        "camPosX": 150,"camPosY": 150,"camPosZ": -150
    }
}