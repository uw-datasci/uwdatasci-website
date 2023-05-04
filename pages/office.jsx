import {
  lazy,
  Suspense,
  useContext,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ThemeContext from "../store/theme-context";
import { Overlay } from "../components/cards/OfficeCards";
import { OrbitControls, useScroll, ScrollControls } from "@react-three/drei";
import gsap from "gsap";
import { easing } from "maath";

const RoomModelComponent = lazy(() =>
  import("../components/other/RoomModel.jsx")
);
const ChairModelComponent = lazy(() =>
  import("../components/other/ChairModel.jsx")
);

const CAMERA_X = 0;
const CAMERA_Y = 4.5;
const CAMERA_Z = 15;

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [CAMERA_X + state.mouse.x / 2, CAMERA_Y + state.mouse.y / 2, CAMERA_Z],
      0.2,
      delta
    );
  });
}

const OfficeElements = () => {
  const overallRef = useRef();
  const tl = useRef();

  const scrolly = useScroll();

  useFrame(() => {
    tl.current.seek(scrolly.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Page 2
    tl.current.to(
      overallRef.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      overallRef.current.position,
      {
        duration: 1,
        x: -2,
        y: 1,
        z: 5,
      },
      0
    );

    // Page 3
    tl.current.to(
      overallRef.current.rotation,
      {
        duration: 1,
        x: 0,
        y: -Math.PI / 6,
        z: 0,
      },
      2
    );
    tl.current.to(
      overallRef.current.position,
      {
        duration: 1,
        x: 2,
        y: 1,
        z: 6,
      },
      2
    );
  });

  return (
    <group ref={overallRef}>
      <RoomModelComponent />
      <ChairModelComponent />
    </group>
  );
};

const ThreeDScene = () => {
  const themeContext = useContext(ThemeContext);
  const [hasGL, setGL] = useState(true);

  return (
    <Suspense fallback={"loading"}>
      <Canvas
        shadows
        alpha
        style={{ height: "1000px" }}
        camera={{
          position: [CAMERA_X, CAMERA_Y, CAMERA_Z],
          rotation: [-Math.PI / 10, 0, 0],
          fov: 55,
        }}
      >
        <ScrollControls pages={4} damping={0.25}>
          {hasGL && <Rig />}
          <spotLight
            position={[50, 20, 20]}
            angle={0.25}
            penumbra={1}
            intensity={themeContext.theme === "light" ? 0 : 0.3}
          />
          <spotLight
            position={[-50, 20, 20]}
            angle={0.25}
            penumbra={1}
            intensity={themeContext.theme === "light" ? 0.3 : 0}
          />
          <ambientLight
            color={"white"}
            intensity={themeContext.theme === "light" ? 0.5 : 0.1}
          />
          <Overlay />
          <OfficeElements />
          {/* <OrbitControls /> */}
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
};

export default function Office() {
  return (
    <div>
      <ThreeDScene />
    </div>
  );
}
