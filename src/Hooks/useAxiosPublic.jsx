import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://backend-janitorial-appointment.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;