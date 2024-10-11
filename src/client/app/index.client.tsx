import { createPortal, createRoot } from "@rbxts/react-roblox";

import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";

import { App } from "./app";
import { store } from "client/store";
import { ReflexProvider } from "@rbxts/react-reflex";

const root = createRoot(new Instance("Folder"));
const target = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
	createPortal(
		<ReflexProvider key="root-provider" producer={store}>
			<App key="app" />
		</ReflexProvider>,
		target,
	),
);

