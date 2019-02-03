const BasRoute = require('./base/baseRoute')
const { join } = require('path')

class UtilRoutes extends BasRoute {
    coverage() {
        return{
            path: '/coverage/{param*}',
            method: 'GET',
            config: {
                auth: false
            },
            handler: {
                directory: {
                    path: join(__dirname, '../../coverage'),
                    redirectToSlash: true,
                    index: true
                }
            }
        }
    }
} 

module.exports = UtilRoutes