import { useCamera, useDebounceState, useEventListener } from "@rbxts/pretty-react-hooks";
import { useCallback } from "@rbxts/roact";

const BASE_REM = 16;
const MIN_REM = 10;
const BASE_RESOLUTION = new Vector2(1280, 832);
const DOMINANT_AXIS = 0.5;

function calculateRem(viewport: Vector2) {
	const width = math.log(viewport.X / BASE_RESOLUTION.X, 2);
	const height = math.log(viewport.Y / BASE_RESOLUTION.Y, 2);
	const centered = width + (height - width) * DOMINANT_AXIS;

	return math.max(BASE_REM * 2 ** centered, MIN_REM);
}

export function useRem() {
	const camera = useCamera();
	const [rem, setRem] = useDebounceState(calculateRem(camera.ViewportSize), { wait: 0.2, leading: true });

	useEventListener(camera.GetPropertyChangedSignal("ViewportSize"), () => {
		setRem(calculateRem(camera.ViewportSize));
	});

	return useCallback(
		(value: number, mode: "scale" | "unit" = "unit") => {
			return mode === "unit" ? value * rem : value * (rem / BASE_REM);
		},
		[rem],
	);
}
