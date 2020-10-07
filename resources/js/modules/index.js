import axios from "axios";

const api = axios.create();
api.interceptors.request.use(
    function(config) {
        config.headers.common["X-Requested-With"] = "XMLHttpRequest";
        // config.headers.common["Authorization"] = "token";
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
api.interceptors.response(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            console.error("Unauthorize");
        }
        return Promise.reject(error);
    }
);

export { api };
