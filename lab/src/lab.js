export const pozdrav = (jmeno) => console.log(`zdar ${jmeno}`);

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

const addBox = (id, positionVector, material) => {
    const box = BABYLON.MeshBuilder.CreateBox(id, {size: 100} , mainScene);
    setMeshPositionAndMaterial(box, positionVector, material);
}

const addSphere = (id, positionVector, material) => {
    const sphere = BABYLON.MeshBuilder.CreateSphere(id, {diameter: 1000}, mainScene);
    setMeshPositionAndMaterial(sphere, positionVector, material);
}

const addPlane = (id, positionVector, material) => {
    const plane = BABYLON.MeshBuilder.CreatePlane(id, {size: 200}, mainScene)
    plane.rotate(BABYLON.Axis.X, Math.PI / 2);
    setMeshPositionAndMaterial(plane, positionVector, material);
}




addBox("box1", null, blueWireFrameMaterial);
addSphere("sphere");