import { InferState, combineProducers } from "@rbxts/reflex";
import { slices } from "shared/slices";
import { broadcasterMiddleware } from "./middleware/broadcaster";
import { counterSlice } from "shared/slices/counter";

export type RootState = InferState<typeof store>;

export const store = combineProducers({
	...slices,
});

store.applyMiddleware(broadcasterMiddleware());
