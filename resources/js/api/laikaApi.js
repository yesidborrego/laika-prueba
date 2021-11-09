import axios from 'axios'

const laikaApi = axios.create({
  baseURL: `${process.env.MIX_APP_URL}/api/v1`
})

export default laikaApi