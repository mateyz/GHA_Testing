import { onPlayerAdded, promisePlayerDisconnected } from "shared/utils/player-utils";
import { store } from "server/store";
import { remotes } from "shared/remotes";

interface PlayerHumanoid extends Humanoid {
	Health: number;
}

export async function initExampleService() {
	print("Initialised Example Service");
	onPlayerAdded((player) => {

		promisePlayerDisconnected(player).andThen(() => {
			print("Player gone!")
		});

		player.CharacterAdded.Connect((Character) => {
			store.incrementCount()
			print("Increment counter")
		});
	});
}
