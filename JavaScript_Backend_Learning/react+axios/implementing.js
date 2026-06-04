import axios, {isCancel, isAxiosError} from "axios";

const response = await axios.get(
  "https://jsonplaceholder.typicode.com/posts/1"

);
export const makeRequest = await axios.makeRequest(
    
)
console.log(response.data);