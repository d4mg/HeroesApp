import { heroApi } from "../api/hero.api"
import { SummaryInformationResponse } from "../interfaces/summary-information.response";

export const getSummaryAction = async() => {

     const {data} = await heroApi.get<SummaryInformationResponse>('/summary');

     return data;
}