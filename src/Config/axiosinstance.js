import axios from "axios";

const baseurl="http://localhost:6800"
const axiosinstance=axios.create()

axiosinstance.defaults.baseURL=baseurl
axiosinstance.defaults.timeout=5000

export default axiosinstance