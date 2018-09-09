export const mainCanvas = document.getElementById("main-canvas");
export const mainCanvasEngine = new BABYLON.Engine(mainCanvas, true);
export const mainScene = new BABYLON.Scene(mainCanvasEngine);
mainScene.clearColor = new BABYLON.Color3.Black();

// export const mainCamera = new BABYLON.UniversalCamera(
//     "mainCamera",
//     new BABYLON.Vector3(0,0,0),
//     mainScene
// )

// mainCamera.setTarget(BABYLON.Vector3.Zero());
// mainCamera.attachControl(mainCanvas, true);

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
    return box;
}

const addSphere = (id, diameter,  positionVector, material) => {
    const sphere = BABYLON.MeshBuilder.CreateSphere(id, {diameter: diameter || 100}, mainScene);
    setMeshPositionAndMaterial(sphere, positionVector, material);
    return sphere;
}

const box = addBox("box1", 50 , null, blueWireFrameMaterial);
const sphere1 = addSphere("sphere1", 500);
const sphere2 = addSphere("sphere2", 10, BABYLON.Vector3(200,100,100));


export const followCamera = new BABYLON.FollowCamera(
    "followCamera",
    new BABYLON.Vector3(-1000,1000, 0),
    mainScene
)

followCamera.radius = 100;
followCamera.heightOffset = 0;
followCamera.rotationOffset = 0;
followCamera.cameraAcceleration = 0.05;
followCamera.attachControl(mainCanvas, true);
followCamera.lockedTarget = sphere2;