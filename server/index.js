//server端代码已经部署到阿里云服务器上
// ./config.js为了不暴露远程服务器的用户名和密码，只作代码展示，运行index.js的话请先使用项目中的project.sql文件给本地mysql数据库创建库和表

const Koa = require('koa');
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const dbConfig = require("./config").db;
const router = require("./routes/index");
const { query } = require("./utils/db");
let socketModel = require('./socket/index');
const app = new Koa();

const server = require("http").createServer(app.callback());
const io = require("socket.io")(server);
io.on('connection', socket => {
    const socketId=socket.id;
    socket.on("login", async userId => {
        await socketModel.saveUserSocketId(userId, socketId);
    });
    socket.on('update',async userId=>{
        await socketModel.saveUserSocketId(userId,socketId);
    })
    socket.on('sendMessage',async toId=>{
        let arr =await socketModel.getUserSocketId(toId);
        console.log(arr);
        const toSocketId=JSON.parse(JSON.stringify(arr[0])).socketId;
        io.to(toSocketId).emit('msgComming');
    })
});


server.listen(3389);
app.use(cors());

app.use(bodyParser());//获取post请求的参数的中间件
app.use(router.routes()).use(router.allowedMethods());


console.log("服务器已启动,端口3389");
