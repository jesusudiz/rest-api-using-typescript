import {Router,Request, Response} from "express";
import  { getItem, getItems, postItem, updateItem, deleteItem } from "./controllers/items.ts";
const router = Router();

router.get('/item', getItems);







export {router};