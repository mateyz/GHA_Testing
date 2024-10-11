import { useProducer, UseProducerHook } from "@rbxts/react-reflex";
import { Producer } from "@rbxts/reflex";
import { store } from "client/store";

export const useStore: UseProducerHook<Producer> = useProducer;
