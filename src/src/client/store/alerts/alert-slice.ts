import { createProducer } from "@rbxts/reflex";

export interface AlertState {
	readonly alerts: readonly Alert[];
}

export interface Alert {
	readonly id: number;
	readonly scope?: AlertScope;
	readonly emoji: string;
	readonly message: string;
	readonly messageType: string;
	readonly visible: boolean;
	readonly duration: number;
	readonly color: Color3;
	readonly colorSecondary: Color3;
	readonly colorMessage: Color3;
}

export type AlertScope = "Urgent" | "Notification";

const initialState: AlertState = {
	// alerts: [{ id: 1, emoji: "A", message: "Hello ?", visible: false }],#
	alerts: [],
};

export const alertSlice = createProducer(initialState, {
	addAlert: (state, alert: Alert) => ({
		...state,
		alerts: [alert, ...state.alerts],
	}),

	removeAlert: (state, id: Number) => ({
		...state,
		alerts: state.alerts.filter((alert) => alert.id !== id),
	}),

	setAlertVisible: (state, id: Number, visible: boolean) => ({
		...state,
		alerts: state.alerts.map((alert) => (alert.id === id ? { ...alert, visible } : alert)),
	}),
});
