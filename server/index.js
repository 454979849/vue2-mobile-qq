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
});


server.listen(3000);
app.use(cors());

app.use(bodyParser());//获取post请求的参数的中间件
app.use(router.routes()).use(router.allowedMethods());


console.log("服务器已启动,端口3000");
