import { Car } from "../interfaces/car.interfaces";
import ItemModel from "../models/items";

const insertCar= async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const response = await ItemModel.find({});
  return response;
};

const getCar = async (id: string) => {
  const response = await ItemModel.findOne({ _id: id });
  return response;
};

const updateCar = async (id:string, data: Car) => {
  const response = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};
export { insertCar, getCars, getCar, updateCar };
