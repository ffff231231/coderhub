const { OPERATION_IS_NOT_ALLOWED } = require("../config/error")
const permissionService = require("../service/permission.service")

const verifyPermission = async (ctx, next) => {
  // 1.获取登录用户的id
  const { id } = ctx.user

  // 2.获取资源的name
  const keyName = Object.keys(ctx.params)[0]
  const resourceName = keyName.replace('Id', '')

  // 3.获取资源的id
  const resourceId = ctx.params[keyName]

  // 4.查询user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkResource(resourceName, resourceId, id)
  if (!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 5.执行下一个中间件
  await next()
}

module.exports = {
  verifyPermission
}