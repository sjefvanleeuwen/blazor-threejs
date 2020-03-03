# blazor-threejs

Demonstrates server side interaction using C# with a cube object in three.js on the client side through JSInvoke interop.

Scenario's

1. Alarm / Health monitoring is send to the ThreeJS rendered cube from the server side using a simple timer for testing events and interacting with the Mesh Material.
2. Round Trip, Mesh on the client handles on click event using ray casting. When the user clicks on the cube, the server receives the click event and then invokes a function on the client turning the cube blue.


