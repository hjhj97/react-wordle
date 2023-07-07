import axios from "axios";

axios.defaults.baseURL = "https://random-word-api.herokuapp.com";

axios.interceptors.request.use(
  // interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
  (response) => {
    return response;
  },
  (error) => {
    // 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
    return error;
  }
);

axios.interceptors.response.use(
  // interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

export default axios;
