import express from "express";
import cors from "cors";
import router from "./router/routes.js";
import { config } from "dotenv";
config();

const server = express();
const port = process.env.SERVER_PORT || 3000

server.use(cors());
server.use(express.json());
server.use("/api", router);

server.get("/", (request, response) => {
    return response.status(200).json({
        message: "Hiruki API 🎉",
        docs: "https://docs.hiruki.xyz"
    });
});

server.listen(port, () => console.log("Listening..."));