var mysql = require('mysql');

//创建连接池
const pool =  mysql.createPool({
  host: '112.124.65.59',
  port: '3306',
  user: 'moyu',
  password: '040511',
  database: 'softwareHomework'
});


//封装连接返回查询结果
const sqlConnection = (sql,params) =>{
	return new Promise((resolve,reject) => {
		pool.getConnection((err,connection) =>{
			if(err){
				console.log("err",err)
				reject(err)
				return
			}
			connection.query(sql,params,(err,results) => {
				if(err){
					console.log("err",err)
					reject(err)
					return
				}
				resolve(results)
				connection.release()
			})
		})
	})
}


module.exports = {
	sqlConnection
};