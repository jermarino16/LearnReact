import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 5Bx0j1jF0hT1ie7ZmhnWo0MU_fz3zw-h6eOc7J7eyIY"
  }
});
