import axios from "axios";

const baseurl="http://localhost:6800"
const axiosinstance=axios.create()

axiosinstance.defaults.baseURL=baseurl
axiosinstance.defaults.timeout=2500

export default axiosinstance