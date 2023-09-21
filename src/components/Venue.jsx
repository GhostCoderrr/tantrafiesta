"use client";

import Tag from "./bytes/Tag";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdOutlineEmojiEvents } from "react-icons/md";
import Canva from "./Canva";

const Venue = () => {
  //   const scene = new THREE.Scene();

  //   //creating our sphere
  //   const geometry = new THREE.SphereGeometry(3, 64, 64);
  //   const material = new THREE.MeshStandardMaterial({
  //     color: "#00ff83",
  //   });

  //   const mesh = new THREE.Mesh(geometry, material);

  //   scene.add(mesh);
  //   //sizes
  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  //   //light
  //   const light = new THREE.PointLight(0xffffff, 1, 100);
  //   light.position.set(0, 10, 10);
  //   scene.add(light);
  //   //camera
  // const camera = new THREE.PerspectiveCamera(
  //   45,
  //   sizes.width / sizes.height,
  //   0.1,
  //   100
  // );
  // camera.position.z = 20;
  // scene.add(camera);

  //   //Renderer
  //   const canvas = document.querySelector(".webgl");

  //   const renderer = new THREE.WebGLRenderer({ canvas });
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(2);
  //   renderer.render(scene, camera);

  //   //controls
  //   const controls = new OrbitControls(camera, canvas);
  //   controls.enableDamping = true;
  //   controls.enablePan = false;
  //   controls.enableZoom = false;
  //   controls.autoRotate = true;
  //   controls.autoRotateSpeed = 5;

  //   //resize
  //   window.addEventListener("resize", () => {
  //     //update sizes
  //     sizes.width = window.innerWidth;
  //     sizes.height = window.innerHeight;
  //     //update camera
  //     camera.aspect = sizes.width / sizes.height;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(sizes.width, sizes.height);
  //   });

  //   const loop = () => {
  //     controls.update();
  //     renderer.render(scene, camera);
  //     window.requestAnimationFrame(loop);
  //   };
  //   loop();

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row justify-center items-center">
      <div className="w-screen h-[40vh] lg:w-[40vw] lg:h-[40vw] relative">
        <div className="absolute text-white z-10 text-5xl font-semibold pointer-events-none -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          Venue
        </div>
        <Canva className="z-[-1]" />
      </div>
      <div className="w-screen h-[60vh] lg:w-[60vw] lg:h-full  flex flex-col justify-around items-center">
        <div className="card-body hidden lg:block rounded-xl w-[90%] lg:w-[60%] h-[50%] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7452.1287888675615!2d79.026375!3d20.949929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1695184116642!5m2!1sen!2sin"
            style={{
              border: 0,
              filter: `invert(90%) hue-rotate(180deg)`,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full  rounded-xl"
          ></iframe>
        </div>
        <div className="card-body w-[90%] lg:w-[60%]">
          <div className="card-content">
            <h3 className=" text-sm tracking-wider font-semibold">ADDRESS</h3>
            <p>
              Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari
              Soot Girni, Village - Waranga, PO - Dongargaon(Butibori), Tehsil-
              Nagpur (Rural), District Nagpur, Maharashtra- 441108
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
