import { CameraControls } from "@react-three/drei";

export type ContentMap = {
    [key: string]: JSX.Element;
}

export const handlePlanetClick = (
    name: string,
    position: [number, number, number],
    cameraControlsRef: React.MutableRefObject<CameraControls>,
    setActivePlanet: (name: string | null) => void,
) => {
    setActivePlanet(name);
    if (cameraControlsRef.current) {
        cameraControlsRef.current.setLookAt(
            position[0],
            position[1],
            2,
            position[0],
            position[1],
            0,
            true
        );
    }
};
;
export const handleBackToPlanets = (setActivePlanet: (name: string | null) => void, cameraControlsRef: React.MutableRefObject<CameraControls>) => {
    setActivePlanet(null);
    if (cameraControlsRef.current) {
        cameraControlsRef.current.setLookAt(0, 0, 7, 0, 0, 0, true);
    }
};