export const mainCanvas = document.getElementById("main-canvas");
export const mainCanvasEngine = new BABYLON.Engine(mainCanvas, true);
export const mainScene = new BABYLON.Scene(mainCanvasEngine);
mainScene.clearColor = new BABYLON.Color3.Black();

export const mainCamera = new BABYLON.UniversalCamera(
    "mainCamera",
    new BABYLON.Vector3(0,0,0),
    mainScene
)
mainCamera.setTarget(BABYLON.Vector3.Zero());
mainCamera.attachControl(mainCanvas, true);

export const wireFrameMaterial = new BABYLON.StandardMaterial("wireframe", mainScene);
wireFrameMaterial.wireframe = true;
wireFrameMaterial.emissiveColor = new BABYLON.Color3(1,1,1);

export const blueWireFrameMaterial = new BABYLON.StandardMaterial("blueWireframe", mainScene);
blueWireFrameMaterial.wireframe = true;
blueWireFrameMaterial.emissiveColor = new BABYLON.Color3(0,1,0);

const setMeshPositionAndMaterial = (mesh, positionVector, material) => {
    mesh.setPositionWithLocalVector(positionVector || BABYLON.Vector3.Zero());
    mesh.material = material || wireFrameMaterial;
}

const addBox = (id, size, positionVector, material) => {
    const box = BABYLON.MeshBuilder.CreateBox(id, {size: size || 100} , mainScene);
    setMeshPositionAndMaterial(box, positionVector, material);
}

const addSphere = (id, diameter,  positionVector, material) => {
    const sphere = BABYLON.MeshBuilder.CreateSphere(id, {diameter: diameter || 100}, mainScene);
    setMeshPositionAndMaterial(sphere, positionVector, material);
}

addBox("box1", 50 , null, blueWireFrameMaterial);
addSphere("sphere", 500);
addSphere("sphere2", 10, BABYLON.Vector3(200,100,100));