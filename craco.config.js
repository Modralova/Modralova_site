const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const util = require('util')
const fs = require('fs')
const path = require("path");
const { experimentalStyled } = require("@mui/material");
const buffer = require('buffer/')
const { CheckerPlugin } = require('awesome-typescript-loader')
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');



//let index = require(`./craco_log/${process.env.NODE_ENV}_index.json`).index


module.exports = {

    webpack: {

        configure: (webpackConfig) => {






            const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(

                ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'

            );

            // console.log("webpackConfig: ------------------------------------------------------------------------------------>>", 
            // util.inspect(webpackConfig, { showHidden: false, depth: null, colors: true }))

            webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);  /// wydupia ModuleScopePlugin

            //  webpackConfig.cache.buildDependencies.tsconfig[0] = path.resolve(__dirname,  "./config/tsconfig.json")


            webpackConfig['resolve'] = {
                fallback: {
                    fs: require.resolve("browserify-fs"),
                    path: require.resolve("path-browserify"),
                    crypto: require.resolve("crypto-browserify"),
                    stream: require.resolve("stream-browserify"),
                    horseview: require.resolve("cryptr"),
                    buffer: require.resolve("buffer/")

                },

                extensions: ['.ts', '.tsx', '.js', '.jsx']
            },

                webpackConfig.experiments = {
                    ...webpackConfig.experiments,
                    topLevelAwait: true,

                }

                , webpackConfig.plugins = [...webpackConfig.plugins, new CheckerPlugin()]
                , webpackConfig.module.rules = [...webpackConfig.module.rules, {
                    test: /\.(tsx)?$/,
                    loader: 'awesome-typescript-loader'
                }]
                ,
                webpackConfig.plugins = [...webpackConfig.plugins,
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                })
                    ,

                new webpack.ProvidePlugin({
                    process: 'process/browser',
                }),

                ///refreshes nodemodules

                process.env.NODE_ENV === "development"
                 ? 
                webpackConfig.plugins.apply = new ReactRefreshWebpackPlugin({ overlay: false, })
                :
                webpackConfig.plugins.apply = new ReactRefreshWebpackPlugin({ overlay: true })

                ]



            // webpackConfig.plugins.apply = new CheckerPlugin()


            return writeLogDate(webpackConfig)

            //return webpackConfig



        },


    },


};



const writeLog = (webpackConfig) => {

    fs.writeFileSync(path.resolve(__dirname, `./craco_log/${process.env.NODE_ENV}_index.json`), JSON.stringify({ index: index + 1 }))


    if (!fs.existsSync(path.resolve(__dirname, `./craco_log/webpack_log_${process.env.NODE_ENV}_${index + 1}.json`))) {

        fs.closeSync(fs.openSync(path.resolve(__dirname, `./craco_log/webpack_log_${process.env.NODE_ENV}_${index + 1}.json`), 'w'));

    } else {

        fs.unlinkSync(path.resolve(__dirname, `./craco_log/webpack_log_${process.env.NODE_ENV}_${index + 1}.json`))
    }

    fs.writeFileSync(path.resolve(__dirname, `./craco_log/webpack_log_${process.env.NODE_ENV}_${index + 1}.json`), JSON.stringify(webpackConfig))

    return webpackConfig
}




const writeLogDate = (webpackConfig) => {

    switch (process.env.NODE_ENV) {

        case "development":

            if (!fs.existsSync(path.resolve(__dirname, `./cracoLog/${new Date().toLocaleString().replace(/(\.|\, |:)/g, "")}_DEV.json`))) {

                fs.closeSync(fs.openSync(path.resolve(__dirname, `./cracoLog/${new Date().toLocaleString().replace(/(\.|\, |:)/g, "")}_DEV.json`), 'w'));
            }

            fs.writeFileSync(path.resolve(__dirname, `./cracoLog/${new Date().toLocaleString().replace(/(\.|\, |:)/g, "")}_DEV.json`), JSON.stringify(webpackConfig))
            break;

        case "production":

            if (!fs.existsSync(path.resolve(__dirname, `./cracoLog/${new Date().toLocaleString().replace(/(\.|\, |:)/g, "")}_PRO.json`))) {

                fs.closeSync(fs.openSync(path.resolve(__dirname, `./cracoLog/${new Date().toLocaleString().replace(/(\.|\, |:)/g, "")}_PRO.json`), 'w'));
            }

            fs.writeFileSync(path.resolve(__dirname, `./cracoLog/${new Date().toLocaleString().replace(/(\.|\, |:)/g, "")}_PRO.json`), JSON.stringify(webpackConfig))

            break;

        default:

            break;


    }

    return webpackConfig

}