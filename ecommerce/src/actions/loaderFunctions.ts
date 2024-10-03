import axios from "axios"
import { bannerApiresponse, BlogsApiResponse, CoversionApiResponse } from "../types/apiRespose"

export const GetBannerData = async (url: string): Promise<bannerApiresponse[] | undefined> => {
    try {
      const { data } = await axios.get<bannerApiresponse[]>(url); 
      return data; 
    } catch (error) {
      console.error("Error fetching data: ", error);
      return undefined; 
    }
  };

  export const GetBlogs = async (url: string): Promise<BlogsApiResponse[] | undefined> => {
    try {
      const { data } = await axios.get<BlogsApiResponse[]>(url); 
      return data; 
    } catch (error) {
      console.error("Error fetching data: ", error);
      return undefined; 
    }
  };

  export const GetConverTed= async (url: string): Promise<CoversionApiResponse|undefined> => {
    try {
      const { data } = await axios.get<any>(url,{
        headers:{
          "x-rapidapi-host":"currency-conversion-and-exchange-rates.p.rapidapi.com",
          "x-rapidapi-key":"b71d188f4bmsheefc05dfc196e75p1b2c77jsn717645839888"
        }
      }); 
      const rates:CoversionApiResponse = data.rates;
      return rates; 
    } catch (error) {
      console.error("Error fetching data: ", error);
      return undefined; 
    }
  };