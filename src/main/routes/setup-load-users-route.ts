import { Elysia, t } from "elysia";
import { loadUsersService } from "../factories/load-users-factory";

export const setupLoadUserRoute = () => {
    const app = new Elysia()
        .decorate("loadUsersService", loadUsersService)
        .get("/users", async ({ loadUsersService }) => {
            return await loadUsersService({})
        })

    return app;
}