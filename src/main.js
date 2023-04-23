const Koa = require('koa')
const KoaRouter = require('@koa/router')
const { SERVER_RORT } = require('./config/server')

const app = new Koa()

const userRouter = new KoaRouter({ prefix: '/users' })
userRouter.get('/list', (ctx, next) => {
  ctx.body = 'users list'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(SERVER_RORT, () => {
  console.log('coderhub的服务器启动成功~')
})