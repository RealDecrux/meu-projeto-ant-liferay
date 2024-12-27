// craco.config.js  
module.exports = {  
    style: {  
        module: {  
            rules: [  
                {  
                    test: /\.less$/,  
                    use: [  
                        'style-loader',  
                        'css-loader',  
                        {  
                            loader: 'less-loader',  
                            options: {  
                                lessOptions: {  
                                    modifyVars: {  
                                        'primary-color': '#4FA1C2',  
                                        'secundary-color': '#578597', 
                                        'tertiary-color': '#51656D',
                                        'quaternary-color': '#3B4042',
                                        'quinary-color': '#252F33'
                                        // adicione mais variáveis para sobrescrever  
                                    },  
                                    javascriptEnabled: true,  
                                },  
                            },  
                        },  
                    ],  
                },  
            ],  
        },  
    },  
};