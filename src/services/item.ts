import {Car} from "../interfaces/car.interfaces"
import ItemModel from "../models/items"

const insertItem= async(item:Car)=>{
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};


export {insertItem}