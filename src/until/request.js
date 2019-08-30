import axios from 'axios'
import {message} from 'antd'



const axiosService = axios.create();
// if(process.env.NODE_ENV=='development'){
       
// }
axios.defaults.withCredentials = true;
axiosService.defaults.timeout = 5000;
axiosService.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosService.defaults.headers.common['Accept']="application/json, text/plain, */*";
axiosService.defaults.headers.common['Content-Type']="application/json;charset=utf-8";
// axiosService.defaults.baseURL='https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/reacts/'
// axiosService.defaults.baseURL='https://www.easy-mock.com/mock/5d01db9b61dd9e4ba61e2117/reacts/'
axiosService.defaults.baseURL='/api'
axiosService.interceptors.request.use(
    (config) => {
        let nowdate=new Date().getTime()
        let olddate=localStorage.getItem('date')
        if(nowdate>olddate){
            localStorage.removeItem('token')
            localStorage.removeItem('date')
            setTimeout(()=>{
               window.location.reload()
            },3000)
            message.error('登录已过时，请重新登录')
        }
        // if (config.data && config.data.$skipAuthHandler) {
        //     config.$skipAuthHandler = true;
        //     delete config.data.$skipAuthHandler;
        // }
        // if (config.params && config.params.$skipAuthHandler) {
        //     config.$skipAuthHandler = true;
        //     delete config.params.$skipAuthHandler;
        // }
        // config.headers.Authorization = getAuthorization();
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

axiosService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // const err = error.response;
        // if (err.status === 401 && !! config.data && !config.data.$skipAuthHandler) {
        //     user.clear();
        //     window.location = '/unauthorization';
        // }
        return Promise.reject(error);
    }
);

export default axiosService;