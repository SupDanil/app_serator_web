
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";





export const TreeDModel = () => {

    const mountRef = useRef(null);

    useEffect(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 15;
        camera.position.y = 2;
        const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        renderer.setClearColor(0x000000,0)

        renderer.setSize( 1500, 500 );


        const alight = new THREE.AmbientLight(0x404040, 1.2)
        scene.add(alight)

        const pLight = new THREE.PointLight(0xFFFFFF, 1.2)
        pLight.position.set(0,-3,7)
        scene.add(pLight)


       let loader = new GLTFLoader()
        let obj = null;


        loader.load('/system_images/scene.gltf', function (gltf) {

            obj = gltf
            obj.scene.scale.set(0.01,0.01,0.01)

            scene.add(obj.scene)
        })


        mountRef.current.appendChild( renderer.domElement );

        const animate = function () {
            requestAnimationFrame( animate );
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            renderer.render( scene, camera );
            if(obj) obj.scene.rotation.y += 0.03;


        }

        animate();

        return () => mountRef.current.removeChild( renderer.domElement);
    }, []);

    return (
        <div className="canvas" ref={mountRef}>

        </div>
    );
}


