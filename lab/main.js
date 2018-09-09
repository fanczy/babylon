import { mainCanvasEngine, mainScene } from "./src/lab.js";

let frame = 0;
const step = 10 ** -2;
let currentStep = 0;

mainCanvasEngine.runRenderLoop(() => {
    frame += 1
    currentStep = frame * step;

    

    mainScene.getMeshByName("sphere2").position.x += currentStep / 10;
    mainScene.getMeshByName("sphere2").position.y += (Math.sin(currentStep));

    mainScene.render();
});