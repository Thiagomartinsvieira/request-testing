import axios from "axios";

const api = axios.create({
    baseURL: `https://api.github.com/users?since=16&per_page=5`
})

export default api