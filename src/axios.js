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

// axiosClient.interceptors.response.use(response => {
//     return response;
// }, error => {
//     // Ne pas déconnecter sur les routes d'auth
//     const authRoutes = ['/login', '/register'];
//     const isAuthRoute = authRoutes.some(route => error.config.url.includes(route));

//     if (error.response && error.response.status === 401 && !isAuthRoute) {
//         localStorage.removeItem('TOKEN')
//         window.location.reload();
//         return error;
//     }
    
//     throw error;
// })

// Intercepteur pour les réponses
axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Gestion des erreurs réseau
        if (error.message === 'Network Error') {
            console.error('Problème de connexion réseau');
            // Vous pouvez ici implémenter une logique spécifique pour les erreurs réseau
            return Promise.reject(new Error('Problème de connexion réseau. Veuillez vérifier votre connexion Internet.'));
        }

        // Gestion des erreurs 429 (Too Many Requests)
        if (error.response && error.response.status === 429 && !originalRequest._retry) {
            originalRequest._retry = true;
            const retryAfter = parseInt(error.response.headers['retry-after']) || 2;
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            return axiosClient(originalRequest);
          }

        // Gestion des erreurs 401 (Non autorisé)
        if (error.response && error.response.status === 401) {
            const authRoutes = ['/login', '/register', '/verify-email'];
            const isAuthRoute = authRoutes.some(route => originalRequest.url.includes(route));

            if (!isAuthRoute) {
                console.log('Session expirée. Redirection vers la page de connexion.');
                localStorage.removeItem('TOKEN');
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }

        // Logging des erreurs pour le débogage
        console.error('Erreur Axios:', error.response ? error.response.data : error.message);

        return Promise.reject(error);
    }
);

export default axiosClient;