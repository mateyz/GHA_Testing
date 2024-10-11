
import { runOnce } from "shared/utils/run-once";
import { initExampleService } from "./operative";

export const initExampleServices = runOnce(async () => {
	initExampleService();
});
