import { Elysia, t } from "elysia";
import { signupService } from "../factories/signup-factory";

export const setupSignupRoute = () => {
    const app = new Elysia()
        .decorate("signupService", signupService)
        .post("/signup", async ({ body, signupService }) => {
            return await signupService(body)
        }, {
            body: t.Object({
                username: t.String(),
                email: t.String(),
                password: t.String()
            })
        })

    return app;
}