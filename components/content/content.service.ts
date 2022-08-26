import { postRequest } from "../../services/api.service"

export const createContent = async (payload:any) => {
  try {
    const response = await postRequest("campaigns/createCampaign", payload)
    console.log(response)
  } catch (error) {
    console.log(error);
  }
}

