import { CurveModifier } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { CatmullRomCurve3 } from "three";
// const points=getPoint( t, optionalTarget = new Vector3() ) {

//     const point = optionalTarget;

//     t = 2 * Math.PI * t;

//     const x = - 0.22 * Math.cos( t ) - 1.28 * Math.sin( t ) - 0.44 * Math.cos( 3 * t ) - 0.78 * Math.sin( 3 * t );
//     const y = - 0.1 * Math.cos( 2 * t ) - 0.27 * Math.sin( 2 * t ) + 0.38 * Math.cos( 4 * t ) + 0.46 * Math.sin( 4 * t );
//     const z = 0.7 * Math.cos( 3 * t ) - 0.4 * Math.sin( 3 * t );

//     return point.set( x, y, z ).multiplyScalar( 20 );

// }
export default function Test(params) {
  const curveRef = useRef();

  const points = [
    ...Array(20).map((_, i) => {
      let t = 2 * Math.PI * i;
      const x =
        -0.22 * Math.cos(t) -
        1.28 * Math.sin(t) -
        0.44 * Math.cos(3 * t) -
        0.78 * Math.sin(3 * t);
      const y =
        -0.1 * Math.cos(2 * t) -
        0.27 * Math.sin(2 * t) +
        0.38 * Math.cos(4 * t) +
        0.46 * Math.sin(4 * t);
      const z = 0.7 * Math.cos(3 * t) - 0.4 * Math.sin(3 * t);
      return { x, y, z };
    }),
  ];

  const curve = useMemo(
    () => new CatmullRomCurve3(points, true, "centripetal"),
    [],
  );
  return (
    <CurveModifier ref={curveRef} curve={curve}>
      <mesh>
        <boxGeometry args={[10, 10]} />
        <meshNormalMaterial />
      </mesh>
    </CurveModifier>
  );
}
