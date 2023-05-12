import { AxiosResponse } from "axios";
export interface AxiosRespResults extends AxiosResponse<Results>{}

export interface Results {
  info: {
    page: number,
    results: number
  },
  results: Result[]
}

export interface Result {
  gender: 'male' | 'female',
  name: {
    first: string,
    last: string
  },
  location: {
    country: string
  },
  picture: {
    medium: string
  },
  login: {
    username: string
  }
}