const app = require('./app')
const { SERVER_RORT } = require('./config/server')

app.listen(SERVER_RORT, () => {
  console.log('coderhub的服务器启动成功~')
})