import {Router,Request, Response} from "express";
import  { getItem, getItems, postItem, updateItem, deleteItem } from "../controllers/items";

const router = Router();



router.get('/',getItems);
router.get('/:id', getItem); 
router.post('/', postItem);
router.delete('/:id',deleteItem);
router.put('/:id', updateItem) ;




export {router};