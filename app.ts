import "dotenv/config";
import express from "express";
import cors from "cors";
import { router} from "./src/routes"
import db from "./config/mongo";


const PORT_URL = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

db().then(() => { console.log("Connected to MongoDB") });
app.listen(PORT_URL, () => { console.log(`Server is running on port ${PORT_URL}`) });    