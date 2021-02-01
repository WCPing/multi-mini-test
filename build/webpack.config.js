const CopyWebpcakPlugin = require('copy-webpack-plugin')
const path = require('path')

function copyToApp() {
    const result = []
    const projectArr = ['mini-one', 'mini-two']
    projectArr.forEach(pro => {
        result.push({
            from: 'commons',
            to: path.resolve(__dirname, `../${pro}/src`)
        })
    })
    return result
}

module.exports = {
    mode: 'development',
    plugins: [
        new CopyWebpcakPlugin({
            patterns: [
                ...copyToApp()
            ]
        })
    ]

}
