module.exports={
    devServer:{
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy:{
            '/api':{
                target:'http://apis.juhe.cn',
                changeOrigin:true,
                ws:true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}