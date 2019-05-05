import axios from 'axios'

export default {
    testAxios: () => {
        return axios.get('api/login')
    }
}