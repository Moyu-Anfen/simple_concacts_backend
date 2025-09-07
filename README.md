

> [!IMPORTANT]
>
> ## 说明
>
> **这是简易通讯录的后端部分**
>



> [!WARNING]
>
> **注意部分文件内容隐去（如数据库账号密码），无法直接部署，需要自行修改为自己的数据库**



### ⚙️ 部署

#### **安装** [node.js](https://nodejs.org/zh-cn/) **环境**

```
node > 18.17.1

npm > 9.6.7
```

#### 安装依赖

```javascript
	npm install or npm i
```

#### 启动运行

```javascript
	npm run start
```



### 🎉 功能

- [x] 登录注册
- [x] 密码加密
- [x] 状态保存
- [x] 联系人头像
- [x] 增加联系人
- [x] 删除联系人
- [x] 修改联系人
- [x] 查找联系人



### 🌲 文件树

```
.
|-- README.md
|-- app.js
|-- bin
|   `-- www
|-- list.txt
|-- package-lock.json
|-- package.json
|-- public
|   |-- images
|   |-- javascripts
|   |   `-- sql.js  //封装数据库操作（部分隐去需修改）
|   `-- stylesheets
|       `-- style.css
|-- routes
|   |-- createKey.js //创建公钥私钥的函数
|   |-- index.js //主路由文件
|   `-- users.js
|-- rsa_public_key.pem //RAS公钥（私钥隐去）
`-- views
    |-- error.ejs
    `-- index.ejs
```

> [!CAUTION]
>
> 注意部分文件内容隐去（如数据库账号密码），无法直接部署



### 🐣 需要修改的部分

#### 1 sql.js

```
|-- public
|   |-- images
|   |-- javascripts
|   |   `-- sql.js  👈
```

```
const pool =  mysql.createPool({
  host: '连接IP',
  port: '3306',
  user: '用户',
  password: '密码',
  database: '数据库'
});
```



#### 2 index.js

```
|-- routes
|   |-- createKey.js 
|   |-- index.js 👈
```

```
var transPort = nodemailer.createTransport({
	service: '163',
	host: 'smtp.163.com',
	port: 456,
	secure: true,
	auth: {
		//填写邮箱和授权码
		user: '***',
		pass: '***'
	}
});
```



### 🔒 生成密钥

```
|-- routes
|   |-- createKey.js 👈
|   |-- index.js 
|   `-- users.js
```

> cd 到上面的目录后
>
> ```
> node creatKey.js
> ```
>
> 即可获得公钥和私钥，公钥和私钥将会打印在控制台内



### 🕸️ 代码规范

**详见codestyle.md**



### 
