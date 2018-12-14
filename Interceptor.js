
// 给main.js添加一个拦截器
axios.interceptors.request.use(
    config => {
        if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            config.headers.Authorization = token;
        }
        return config;
    },
    err => {
 
        return Promise.reject(err);//请求错误时，直接结束
 
        //return Promise.resolve(err);//请求错误时，不会直接结束，将会继续传到then里面,无论请求成功还是失败，在成功的回调中都能收到通知
 
});
// --------------------- 
// 作者：AnlanJion 
// 来源：CSDN 
// 原文：https://blog.csdn.net/AnlanJion/article/details/82144113 
// 版权声明：本文为博主原创文章，转载请附上博文链接！