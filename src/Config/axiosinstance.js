import axios from "axios";

const baseurl=""
const axiosinstance=axios.create()

axiosinstance.defaults.baseURL=baseurl
axiosinstance.defaults.timeout=2500

export default axiosinstance