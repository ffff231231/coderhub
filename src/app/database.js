const mysql = require('mysql2')

// 1.创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'Jdh199938',
  connectionLimit: 5
})

// 2.判断连接是否成功
connectionPool.getConnection((err, connection) => {
  // 2.1 判断是否有错误信息
  if (err) {
    console.log('获取连接失败~', err)
    return
  }

  // 2.2 获取连接池中的一个connection对象,使其和数据库建立一下连接(测试一下)
  connection.connect(err => {
    if (err) {
      console.log('和数据库交互失败', err)
    } else {
      console.log('数据库连接成功，可以操作数据库~')
    }
  })
})

// 3.获取连接池中的连接对象(promise形式的连接对象)
const connection = connectionPool.promise()

// 4.将连接对象导出
module.exports = connection