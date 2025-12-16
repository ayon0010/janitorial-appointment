import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    });
    return instance;
};

export default useAxiosPublic;