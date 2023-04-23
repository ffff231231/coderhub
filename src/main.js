const Koa = require('koa')
const userRouter = require('./router/user.router')
const { SERVER_RORT } = require('./config/server')

const app = new Koa()

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(SERVER_RORT, () => {
  console.log('coderhub的服务器启动成功~')
})