const API = "http://localhost:8080/api/";

export const getProducts = async (id) => {
  const apiUrl = id ? `${API}product/${id}` : `${API}product`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
export const getCategory = async () => {
  const apiUrl = `${API}category`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
