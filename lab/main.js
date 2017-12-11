import { mainCanvasEngine, mainScene } from "./src/lab.js";

mainCanvasEngine.runRenderLoop(() => {
    mainScene.render();
});