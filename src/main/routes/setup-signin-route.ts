import { Elysia, t } from "elysia";
import { signinService } from "../factories/signin-factory";

export const setupSigninRoute = () => {
    const app = new Elysia()
        .decorate("signinService", signinService)
        .post("/signin", async ({ body, signinService }) => {
            return await signinService(body)
        }, {
            body: t.Object({
                email: t.String(),
                password: t.String()
            })
        })

    return app;
}