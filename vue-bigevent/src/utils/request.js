import axios from "axios";
const request=axios.create({
  baseURL:'http://api-breakingnews-web.itheima.net',
})

export default request