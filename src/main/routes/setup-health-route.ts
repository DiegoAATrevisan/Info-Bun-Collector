import { Elysia } from "elysia";

export const setupHealthRoute = () => {
    const app = new Elysia()
        .get("/health", () => Date.now())
    return app;
}