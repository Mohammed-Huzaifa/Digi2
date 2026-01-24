import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

export function ParticleSphere() {
  const [splineApp, setSplineApp] = useState<Application | null>(null);

  const getZoomLevel = () => {
    const width = window.innerWidth;
    if (width < 1024) return 1.2;
    return 1.6;
  };

  function onLoad(spline: Application) {
    setSplineApp(spline);
    spline.setZoom(getZoomLevel());
  }

  useEffect(() => {
    const handleResize = () => {
      if (splineApp) splineApp.setZoom(getZoomLevel());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [splineApp]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
    <Spline
      scene="/scene-f0f0f0.splinecode"
      style={{ width: "100%", height: "100%" }}
      onLoad={onLoad}
    />
  </div>
  );
}
