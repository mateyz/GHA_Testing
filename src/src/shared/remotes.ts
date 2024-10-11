import { BroadcastAction } from "@rbxts/reflex";
import { Client, Server, createRemotes, namespace, remote } from "@rbxts/remo";
import { t } from "@rbxts/t";

const something = [];

export const remotes = createRemotes({
	store: namespace({
		broadcast: remote<Client, [actions: BroadcastAction[]]>(),
		start: remote<Server>(),
	}),

	loadout: namespace({
		requestPlayerPrimary: remote<Client>().returns<Map<string, string>>(t.map(t.string, t.string)),
	}),
});
