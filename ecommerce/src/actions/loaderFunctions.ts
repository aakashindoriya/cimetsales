import axios from "axios"
import { bannerApiresponse } from "../types/apiRespose"

export const GetBannerData = async (url: string): Promise<bannerApiresponse[] | undefined> => {
    try {
      const { data } = await axios.get<bannerApiresponse[]>(url); 
      return data; 
    } catch (error) {
      console.error("Error fetching data: ", error);
      return undefined; 
    }
  };