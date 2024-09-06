import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
    data: T;
    message: string;
}

export const base_url = (): string => {
    return 'http://localhost:4000/api/';
};

export const apiClient = axios.create({
    baseURL: base_url(),
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

apiClient.interceptors.response.use(
    (response: AxiosResponse<ApiResponse<any>>) => response,
    (error) => {
        if (error.response) {
            console.error(`API Error (${error.response.status}): `, error.response.data.message);
        } else if (error.request) {
            console.error('Network Error: ', error.message);
        } else {
            console.error('Error: ', error.message);
        }
        return Promise.reject(error);
    }
);

