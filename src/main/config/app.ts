import { Elysia } from "elysia";
import { Logger } from "./logs";
import { setupSignupRoute } from "../routes/setup-signup-route";
import { setupHealthRoute } from "../routes/setup-health-route";

export const setupApp = async (): Promise<Elysia> => {
    const app = new Elysia()
        .onBeforeHandle((r) => {
            Logger(r)
        })
        .use(setupSignupRoute())
        .use(setupHealthRoute())
    return app;
}