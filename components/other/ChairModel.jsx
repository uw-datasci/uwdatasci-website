import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const halo = useRef();
  const model = useGLTF("/img/threed/threejs_just_chairs_1.gltf");
  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  useFrame(() => {
    if (hovered) {
      halo.current.rotation.y += 0.05;
    }
  });

  return (
    <primitive
      ref={halo}
      object={model.scene}
      position={[0.0,-0.9,1.1]}
      rotation={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

export default Model;
