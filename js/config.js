import * as THREE from './libs/three.module.js'
import { OrbitControls } from './libs/OrbitControls.js'
import { DRACOLoader } from './libs/DRACOLoader.js';
import { GLTFLoader } from './libs/GLTFLoader.js'

import { spriteData ,cameraData, props} from './spriteData.js';


let init, roomLoad;
let gltfpath = "assets/office.glb";
let spriteArr = [];
let raycaster = new THREE.Raycaster(),mouse = new THREE.Vector2(),SELECTED;
let texLoader = new THREE.TextureLoader();
const manager = new THREE.LoadingManager();
let currentRoomSelection;

$(document).ready(function () {

    // init = new sceneSetup(80, 1, 5000, -30, 15, 0, 0x919191);
    init = new sceneSetup(70, 1, 5000, 150, 150, -150,spriteData);

    manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
        $('.loaderContainer').show();
        console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );    
    };    
    manager.onLoad = function ( ) {    
        $('.loaderContainer').fadeOut(1200);
        console.log( 'Loading complete!');    
    };   
    roomLoad = new objLoad();
    roomLoad.roomsModel();

   
    
    /*init.controls.addEventListener( 'change', function(){
        init.renderer.render(init.scene, init.cameraMain);           
    });*/
    const refCube = new THREE.CubeTextureLoader()
        .setPath('img/02/')
        .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
    const refCubeDrain = new THREE.CubeTextureLoader()
        .setPath('img/01/')
        .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);

        init.renderer.domElement.addEventListener('pointerdown', onDocumentMouseDown, true);
        $('#backBtn').on('click',function(e){
            cameraAnim(e.target.id);
            spriteVis(spriteArr,1000,1);
        });
});
let material = {

    carBody: new THREE.MeshPhysicalMaterial({
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        //  metalness: 0.9,
        //  roughness: 0.5,
        color: 0x0000ff
        //  normalMap: normalMap3,
        //normalScale: new THREE.Vector2( 0.15, 0.15 )
    }),
    cube: new THREE.MeshLambertMaterial({
        //   map:THREE.ImageUtils.loadTexture("assets/Road texture.png"),
        color: 0xffff00,
        combine: THREE.MixOperation,
        side: THREE.DoubleSide
    }),
}
class sceneSetup {
    constructor(FOV, near, far, x, y, z,spriteData) {
console.log('---->');
        this.container = document.getElementById("container");
        this.scene = new THREE.Scene();
        this.addingCube();
        this.camera(FOV, near, far, x, y, z);
        this.ambientLight();
        this.addSprites(spriteData);
        this.render();
    }
    camera(FOV, near, far, x, y, z) {
        this.cameraMain = new THREE.PerspectiveCamera(FOV, this.container.offsetWidth / this.container.offsetHeight, near, far);
        this.cameraMain.position.set(x, y, z);
        // this.cameraMain.lookAt(this.camPoint);
        // this.cameraMain.lookAt(0, 0, 0);

        this.scene.add(this.cameraMain);
        this.rendering();
        this.directionalLight = new THREE.DirectionalLight(0xffffff, .5);
        this.cameraMain.add(this.directionalLight);
    }
    rendering() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor(0xffffff);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        // this.renderer.gammaOutput = true;
        // this.renderer.gammaFactor = 2.2;			
        this.container.appendChild(this.renderer.domElement);
        this.controls = new OrbitControls(this.cameraMain, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.07;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 300;
         this.controls.maxPolarAngle = Math.PI / 2 * 100 / 120;
        //  this.controls.minPolarAngle = Math.PI / 2 * 80 / 120;
        this.controls.target = new THREE.Vector3(this.camPoint.position.x, this.camPoint.position.y, this.camPoint.position.z);
    
    }
    addingCube() {
        this.geo = new THREE.BoxBufferGeometry(.01, .01, .01);
        this.mat = material.cube;
        this.camPoint = new THREE.Mesh(this.geo, this.mat);
        this.scene.add(this.camPoint);
        this.camPoint.position.set(0, 0, 0);
    }
    //SPRITES
    addSprites(data){     
            data.forEach((element,index) => {                
                this.map = new THREE.TextureLoader().load( element.src );
                this.spriteMat = new THREE.SpriteMaterial( { map: this.map } );
                this.sprite = new THREE.Sprite(this.spriteMat);
                this.sprite.position.set(element.posX,element.posY,element.posZ);
                this.sprite.scale.set(70, 15, 0);
                this.sprite.visible = element.vis;
                this.sprite.name = element.name;
                spriteArr.push(this.sprite);
                this.scene.add( this.sprite );
            });
        
    }
    ambientLight(ambientColor) {
        this.ambiLight = new THREE.AmbientLight(0xffffff, .5);
        this.light = new THREE.HemisphereLight(0xffffff, 0x000000, 1.3);
        // this.scene.add(this.light);
         this.scene.add(this.ambiLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff, .1);
        // this.scene.add( this.directionalLight );


    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.cameraMain);
    }
    render() {
        this.animate();
    }
}
//RAYCASTING
let onDocumentMouseDown = (event) =>{
    event.preventDefault();
    const rect = init.renderer.domElement.getBoundingClientRect(); 
    mouse.x = ( ( event.clientX - rect.left ) / ( rect.right - rect.left ) ) * 2 - 1;
    mouse.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
    raycaster.setFromCamera( mouse, init.cameraMain );
    let intersects = raycaster.intersectObjects( spriteArr,true );  
    if ( intersects.length > 0 ) {
        SELECTED = intersects[ 0 ].object;
        spriteVis(spriteArr,1000,0);
        cameraAnim(SELECTED.name);
        currentRoomSelection = SELECTED.name;    }    
}
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    init.cameraMain.aspect = init.container.offsetWidth / init.container.offsetHeight;
    init.renderer.setSize(init.container.offsetWidth, init.container.offsetHeight);
    init.cameraMain.updateProjectionMatrix();
    requestAnimationFrame(()=>{
        init.controls.update();
        init.renderer.render(init.scene, init.cameraMain);    
    }); 
}

let cameraAnim = (data)=>{
    var mainData = cameraData[data];
    TweenMax.to(init.camPoint.position,1,{x:mainData.cubePosX, y:mainData.cubePosY, z:mainData.cubePosZ,onUpdate:function(){}});
    TweenMax.to(init.cameraMain.position,1,{x:mainData.camPosX, y:mainData.camPosY, z:mainData.camPosZ,onUpdate:function(){
        init.cameraMain.updateProjectionMatrix();	
        init.controls.target = init.camPoint.position;		
    }});
}
let spriteVis = (sprite,time,val) =>{
    setTimeout(function(){
        sprite.forEach(element => {
            // init.scene.getObjectByName(element.name).material.opacity = 0; 
            // init.scene.getObjectByName(element.name).visible = true;                 
            TweenMax.to(init.scene.getObjectByName(element.name).material,.5,{opacity:val,onUpdate:function(){
                init.scene.getObjectByName(element.name).material.needsUpdate = true;
            }})
         });
     },time)      
}
class objLoad {
    constructor() {

    }
    roomsModel() {
        this.loader = new GLTFLoader(manager);
        this.dracoLoader = new DRACOLoader();
        this.dracoLoader.setDecoderPath("js/libs/draco/");//copypasted draco/gltf/all files in public folder
        this.loader.setDRACOLoader( this.dracoLoader );
        this.loader.load(gltfpath, gltf => {
            this.mesh = gltf.scene;
            this.mesh.traverse(function (child) {
                if (child.isMesh) {
                    if(child.name === 'Shadow'){
                        child.material = new THREE.MeshPhongMaterial({
                            map : new THREE.TextureLoader().load('./tex/Shadow-Bake-01.png'),
                            transparent:true,
                        });
                        child.position.z =.8;
                    }
                }
            });
            this.mesh.scale.set(10, 10, 10);
             init.scene.add(this.mesh);
           
            //  requestAnimationFrame(()=>{
            //     init.controls.update();
            //     init.renderer.render(init.scene, init.cameraMain);    
            // }); 
        });
    }
}
