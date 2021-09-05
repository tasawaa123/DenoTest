import { Application, Router, helpers } from "https://deno.land/x/oak@v7.7.0/mod.ts";

function createApp(): Application{
    const app = new Application();
    const router = new Router();

    router.get("/greet", (ctx)=>{
        const { name = "None" } = helpers.getQuery(ctx);
        ctx.response.body = `Hello ${name}`;
    });

    app.use(router.routes());
    return app;
}


const app = createApp();
//await app.listen({port: 8888});

addEventListener("fetch", app.fetchEventHandler());
