import { Players } from "@rbxts/services";

interface CSO {}

export function useCSO() {
	const Player = Players.LocalPlayer;
	if (!Player) {
		return { accesslevel: 253 };
	}
	return { accesslevel: Player.GetRankInGroup(9631920) };
}
