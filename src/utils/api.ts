import axios from "axios";

const BASE_URL = "https://api.jsonbin.io/b/6177e9399548541c29c8c0f5";

const instance = axios.create({ baseURL: BASE_URL });

export default instance;
