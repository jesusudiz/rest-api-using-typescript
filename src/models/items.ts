import {Schema,Types,model,Model} from "mongoose";
import {Car} from "../interfaces/car.interfaces";

const Itemschema = new Schema<Car>(
    {
color:{
    type:String,
    
},
gas:{
    type:String,
    enum:["gasoline","electric"],
},
year:{
    type:Number,
},
description:{
    type:String,
},
price:{
    type:Number,
},

    },
    {timestamps:true, versionKey:false}
    );


const ItemModel = model("items",Itemschema);

export default ItemModel;