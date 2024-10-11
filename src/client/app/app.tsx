import { ReflexProvider, useSelector } from "@rbxts/react-reflex";
import Roact, { StrictMode } from "@rbxts/roact";
import { store } from "client/store";

export function App() {

	return (
		<StrictMode>
			<ReflexProvider producer={store}>

			</ReflexProvider>
		</StrictMode>
	);
}
