import { InferState, combineProducers, loggerMiddleware } from "@rbxts/reflex";
import { receiverMiddleware } from "./middleware/receiver";

import { alertSlice } from "./alerts";
import { slices } from "../../shared/slices";
import { counterSlice } from "shared/slices/counter";
import { RunService } from "@rbxts/services";

export type RootState = InferState<typeof store>;

export const store = combineProducers({
	...slices,
	alerts: alertSlice,
	counter: counterSlice // Shared store
});

if (RunService.IsStudio()) {
	store.applyMiddleware(receiverMiddleware(), loggerMiddleware); // Disable in Live
}

