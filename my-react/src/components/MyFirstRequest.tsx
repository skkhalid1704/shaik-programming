import axios from "axios";

export const CallAPI = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    return response.data.fact;
  } catch (error) {
    console.error("Error fetching cat fact:", error);
    return "Error fetching cat fact";
  }
};
