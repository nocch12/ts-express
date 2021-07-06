import {IRequest} from './IRequest'

export interface UserGetRequest extends IRequest {
  params: {
    sort?: string;
  }
}