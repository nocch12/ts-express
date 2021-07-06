import { Request } from "express";

export interface IRequest<T extends {} = {}> extends Request {
  params: T;
}