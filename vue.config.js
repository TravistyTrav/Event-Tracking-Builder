// vue.config.js for less-loader@6.0.0
module.exports = {
    css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#ffc09f',
              'link-color': '#fff',
              'border-radius-base': '5px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  };