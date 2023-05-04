import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { easing } from "maath";

const Model = () => {
  
  const halo = useRef();
  const model = useGLTF("/img/threed/threejs_room_unjoined.gltf");
  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  //   useFrame(() => {
  //       halo.current.rotation.y += 1;
  //   });

  // useFrame((state, delta) => {
  //   // Animate the selection halo
  //   easing.damp3(halo.current.scale, hovered ? 1.15 : 1, 0.2, delta);
  // });

  return (
    <primitive
      ref={halo}
      object={model.scene}
      position={[0,-1,0.0]}
      rotation={[0, Math.PI * 1.9, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export default Model;
