import express, { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar,updateCar } from "../services/item";

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    res.status(200).json(response);
  } catch (err) {
    handleHttp(res, "Error get Item");
  }
};
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.status(200).json(response);
  } catch (err) {
    handleHttp(res, "Error get Items");
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.status(201).json(responseItem);
  } catch (err:any) {
    handleHttp(res,err.message);
  }
};
const updateItem = async ({ params: { id }, body }: Request, res: Response) => {
  try {
    const responseItem = await updateCar(id, body);
    res.status(200).json(responseItem);
  } catch (err) {
    handleHttp(res, "Error update Item");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res, "Error delete Item");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
