import { ContactField } from "./contactField";
import axios from "axios";

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }

const Request = () => {
    const data = {
        type : "list",
        orgId : 1,
        data : {
            source : "Contact",
            
        }
    }

    return data;
}


export const Field = async() => {
    const request = Request();
    const GetRequestedData = await RequestData(request);
    return GetRequestedData;
}



const RequestData = async(request) =>{
    const url = ContactField();
    const response = await axios.post(url,request,{headers : headers,} )
    return response.data.data.entity;
}

