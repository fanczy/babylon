export const pozdrav = (jmeno) => console.log(`zdar ${jmeno}`);

export const mainCanvas = document.getElementById("main-canvas");
export const mainCanvasEngine = new BABYLON.Engine(mainCanvas, true);

export const createFirstScene = () => {
    const scene = new BABYLON.Scene(mainCanvasEngine);

    scene.clearColor = new BABYLON.Color3.White();

    const camera = new BABYLON.UniversalCamera(
        "camera1", 
        new BABYLON.Vector3(0,10,-10),
        scene
    );

    camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(mainCanvas, true);

    const box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);

    return scene;
}