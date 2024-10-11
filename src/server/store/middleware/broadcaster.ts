import { createBroadcaster } from "@rbxts/reflex";
import { Players } from "@rbxts/services";
import { remotes } from "shared/remotes";
import { slices } from "shared/slices";

export function broadcasterMiddleware() {
	const broadcaster = createBroadcaster({
		producers: slices,
		dispatch: async (player, actions) => {
			remotes.store.broadcast.fire(player, actions);
		},
	});

	remotes.store.start.connect((player) => {
		broadcaster.start(player);
	});

	return broadcaster.middleware;
}
