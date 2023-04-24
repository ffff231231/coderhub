const app = require('./app')
const { SERVER_RORT } = require('./config/server')
require('./utils/handle-error')

app.listen(SERVER_RORT, () => {
  console.log('coderhub的服务器启动成功~')
})