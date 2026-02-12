const baseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:7888" ||
  "https://mernstack-phi.vercel.app";
// console.log("this is our base url", baseUrl);

export default baseUrl;
