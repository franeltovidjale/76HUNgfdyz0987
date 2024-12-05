import axios from 'axios';

// const axiosClient = axios.create({
//     baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
// })

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true
});

axiosClient.interceptors.request.use((config)=>{
    
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`

    return config;
});

// axiosClient.interceptors.response.use(response =>{
//     return response;
// },error => {
//     if (error.response && error.response.status === 401) {
//         localStorage.removeItem('TOKEN')
//         window.location.reload();
//          router.navigate('/login')
       
//         return  error;
//     }
//     throw error;
// })

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    // Ne pas déconnecter sur les routes d'auth
    const authRoutes = ['/login', '/register', '/verify-email'];
    const isAuthRoute = authRoutes.some(route => error.config.url.includes(route));

    if (error.response && error.response.status === 401 && !isAuthRoute) {
        localStorage.removeItem('TOKEN')
        window.location.reload();
        return error;
    }
    throw error;
})

export default axiosClient;