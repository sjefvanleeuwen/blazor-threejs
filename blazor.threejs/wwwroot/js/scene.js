var scene;
var camera;
var cube;
var renderer;
var material;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var caller;

function createScene(reference) {
    window.addEventListener('click', onDocumentMouseDown, false);
    caller = reference;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentMouseDown(event) {
    event.preventDefault();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {

        intersects[0].object.callback();
    }
}

function createCube() {
    var geometry = new THREE.BoxGeometry();
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    cube.callback = function () { caller.invokeMethodAsync('OnClickCube', cube); };
    scene.add(cube);
    camera.position.z = 5;
}

function healthy() {
    cube.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
}

function unhealthy() {
    cube.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
}

function clickCube() {
    cube.material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
}


var animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
