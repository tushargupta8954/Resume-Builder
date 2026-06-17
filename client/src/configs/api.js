import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
    
})

export const getAuthHeaders = (token = localStorage.getItem('token')) => {
    if (!token) return {}

    return {
        Authorization: token.startsWith('Bearer ') ? token : `Bearer ${token}`
    }
}

export default api
