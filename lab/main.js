import { createFirstScene, mainCanvasEngine } from "./src/lab.js";

const scene = createFirstScene();

mainCanvasEngine.runRenderLoop(() => {
    scene.render();
});