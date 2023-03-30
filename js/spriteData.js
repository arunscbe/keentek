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
        'SmallProps_PolyStudio_X30':{
            'props':'assets/props/small_room/SmallProps_PolyStudio_X30-01.glb'
        },
        'SmallProps_LogitechRally_BarMini':{
            'props':'assets/props/small_room/SmallProps_LogitechRally_BarMini-01.glb',           
        },
        'SmallProps_Yealink_A20':{
            'props':'assets/props/small_room/SmallProps_Yealink_A20-01.glb',           
        }     
    },
    'mediumRoom':{   
        'MediumProps_Polystudio_x50':{
            "props":'assets/props/medium_room/MediumProps_Polystudio_x50.glb',           
        },
        'MediumProps_Neatbar':{
            "props":'assets/props/medium_room/MediumProps_Neatbar.glb',           
        },
        "MediumProps_LogitechRally_Bar":{
            "props":'assets/props/medium_room/MediumProps_LogitechRally_Bar.glb',           
        }     
    },
    'largeRoom':{   
        'LargeProps_PolyStudio_X70':{
            'props':'assets/props/large_room/LargeProps_PolyStudio_X70.glb',
        },
        'LargeProps_Neatbar_Pro':{
            'props':'assets/props/large_room/LargeProps_Neatbar_Pro.glb',           
        },
        'LargeProps_Bar':{
            'props':'assets/props/large_room/LargeProps_Bar.glb',            
        }     
    },
}