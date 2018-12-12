const userModel = require("../models/userInfo");


module.exports = async (ctx, next) => {
    console.log(ctx.request.body);

    let userName = ctx.request.body.userName || '';
    let password = ctx.request.body.password || '';
    const userItemRow = await userModel.findDataByName(userName);
    const res = JSON.parse(JSON.stringify(userItemRow));
    if (res.length > 0) {
        if (password == res[0].password) {
            ctx.response.body = {
                code: 200,
                success: true,
                message: '登录成功',
                userInfo: {
                    userName: res[0].userName,
                    password: res[0].password,
                    isVip: res[0].isVip,
                    nickName: res[0].nickName,
                    say: res[0].say,
                    userHead: res[0].userHead,
                    userBg: res[0].userBg,
                }
            }
        } else {
            ctx.response.body = {
                code: 202,
                success: false,
                message: '密码错误'
            }
        }
    } else {
        ctx.response.body = {
            code: 201,
            success: false,
            message: "用户名错误"
        };
    }
}