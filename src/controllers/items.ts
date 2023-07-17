import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res,"Error get Item");
  }
};
const getItems = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res,"Error get Items");
  }
};
const postItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await insertItem(req.body);
  } catch (err) {
    handleHttp(res,"Error post Item");
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res,"Error update Item");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (err) {
    handleHttp(res,"Error delete Item");
  }
};

export { getItem, getItems, postItem, updateItem, deleteItem };
