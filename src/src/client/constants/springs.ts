import { config, SpringOptions } from "@rbxts/ripple";

export const springs = {
	...config.spring,
	bubbly: { tension: 600, friction: 10 },
	responsive: { tension: 400 },
	gentle: { tension: 250, friction: 30 },
	world: { tension: 180, friction: 30 },
};
