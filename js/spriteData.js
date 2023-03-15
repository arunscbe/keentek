export let spriteData = [
   //FRIDGE-OPEN & CLOSE
    {
        "src":"tex/largeRoom.png",
        "posX":-35,"posY":45,"posZ":0,
        "name":"largeRoom",
        "vis":true
    },
    {
        "src":"tex/mediumRoom.png",
        "posX":60,"posY":45,"posZ":90,
        "name":"mediumRoom",
        "vis":true
    },
    {
        "src":"tex/smallRoom.png",
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

export const props = {
    'smallRoom':{   
        "first":{
            "camera":'Poly studio X30',
            "display":'TC8 -On Table'
        },
        "second":{
            "camera":'Logitech Rally Bar mini',
            "display":'Tap IP'
        },
        "third":{
            "camera":'Yealink A20',
            "display":'CTP 18'
        }     
    },
    'mediumRoom':{   
        "first":{
            "camera":'Poly studio X50',
            "display":'TC8'
        },
        "second":{
            "camera":'Neat Bar',
            "display":'Neat Pad'
        },
        "third":{
            "camera":'Logitech Rally Bar',
            "display":'Tap IP'
        }     
    },
    'largeRoom':{   
        "first":{
            "camera":'Poly studio X70',
            "display":'TC8'
        },
        "second":{
            "camera":'Neat Bar pro',
            "display":'Neat Pad'
        },
        "third":{
            "camera":'',
            "display":''
        }     
    },
}