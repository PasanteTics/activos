import axios from 'axios';

export const useAxios = () => {

    const get = async (url, opt = {}) => {
        try {
            const { data } = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...opt
                }
            });

            return data;
        } catch (error) {
            return {
                ok: false,
                message: error.message,
                total: 0,
                data: null
            }
        }
    }

    return {
        get
    }
}