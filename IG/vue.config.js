module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => ({
                ...options,
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith("hanko-")
                }
            }))
    }
}

// const Dotenv = require('dotenv-webpack');

// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new Dotenv()
//         ]
//     }
// };
