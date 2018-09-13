 import { createUniversalCamera } from '../cameras/universal-camera.js'
 import { createFollowCamera } from '../cameras/follow-camera.js'
import { createFreeCamera } from '../cameras/free-camera.js'
import { ship } from './main-scene-setup.js'
import mainScene from '../scenes/main-scene.js'
import mainCanvas from '../canvas/main-canvas.js';

export const setupMainCamera = () => {
    const universalCamera = createUniversalCamera();

    universalCamera.parent = ship;

    universalCamera.position.y -= 25;
    universalCamera.position.z -= 5;

    universalCamera.rotation.x = Math.PI /2;

    universalCamera.setTarget(ship.position);

    //universalCamera.attachControl(mainCanvas);

    // const freeCamera = createFreeCamera();
    // freeCamera.position = new BABYLON.Vector3(0, 0, -250);

    // freeCamera.fov = 120;

    // mainScene.onBeforeRenderObservable.add(()=>{
    //     freeCamera.setTarget(ship.position);
    // });


    console.log("camera set up")
}