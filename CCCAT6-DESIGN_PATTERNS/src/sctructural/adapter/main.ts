import express from "express";
import Hapi from "@hapi/hapi";
import ExpressAdapter from "./ExpressAdapter";
import HapiAdapter from "./HapiAdapter";

// const server = Hapi.server({});
// server.route({
//     path: "/books",
//     method: "get",
//     handler(request: any) {
//        return [
//            { title: "Clean Code" },
//            { title: "Refactoring" },
//            { title: "Domain-Driven Design" }
//        ];
//     }
// })
// server.settings.port = 3000;
// server.start();

// const app = express();
// app.get("/books", function(req, res) {
//     res.json([
//         { title: "Clean Code" },
//         { title: "Refactoring" },
//         { title: "Domain-Driven Design" },
//     ]);
// });
// app.listen(3000);

const books = [
    { title: "Clean Code" },
    { title: "Refactoring" },
    { title: "Domain-Driven Design" }
];

// const http = new ExpressAdapter();
const http = new HapiAdapter();

http.on("get", "/books", function() {
    return books;
});
http.listen(3000); 