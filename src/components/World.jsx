import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
// import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { extend } from "@react-three/fiber";

export default function World() {
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />
      <Physics>
        <Lights />
        <Test />
      </Physics>
    </>
  );
}
