const userModel = require("../models/userInfo");


module.exports = async (ctx, next) => {
    let userName = ctx.request.body.userName || '';
    let password = ctx.request.body.password || '';
    const row = await userModel.findDataByName(userName);
    const res = JSON.parse(JSON.stringify(row));
    if (res.length > 0) {
        if (password == res[0].password) {
            let result=await userModel.setUserLoginStatus(res[0].id);
            result=JSON.parse(JSON.stringify(result));
            ctx.body = {
                code: 200,
                success: true,
                message: '登录成功',
                userInfo: {
                    id: res[0].id,
                    userName: res[0].userName,
                    password: res[0].password,
                    isVip: res[0].isVip,
                    nickName: res[0].nickName,
                    say: res[0].say,
                    userHead: res[0].userHead,
                    userBg: res[0].userBg
                }
            }
        } else {
            ctx.body = {
                code: 202,
                success: false,
                message: '密码错误'
            }
        }
    } else {
        ctx.body = {
            code: 201,
            success: false,
            message: "用户名错误"
        };
    }
}