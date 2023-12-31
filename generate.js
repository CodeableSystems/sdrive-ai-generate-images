import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
async function generateImage(query) {
  let formData = new FormData();
  let username = process.env.username;
  let apikey = process.env.apikey;

  return await axios
    .post("https://sdrive.app/api/v3/ai/image/generate", {
      username,
      apikey,
      query,
    })
    .catch((error) => {
      const errorInfo = {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
      };
      throw Error(JSON.stringify(errorInfo));
    })
    .then((response) => {
      return response.data;
    });
}

// Example usage
(async () => {
  try {
    const response = await generateImage("dog with cowboy hat");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
