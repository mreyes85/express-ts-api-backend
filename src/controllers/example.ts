import { Request, Response } from "express";
import mockData from '../../mock-data/example.json';

export const example_details = (req: Request, res: Response) => {
  res.status(200).json(mockData)
}