const app = require('../app')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, UNAUTHORIZATION } = require('../config/error')

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或密码不能为空'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经被占用，请输入新的用户名~'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户名不存在，请检查用户名~'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '输入的密码错误，请检查密码~'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = '无效的token或token已经过期~'
      break
  }
  ctx.body = { code, message }
})