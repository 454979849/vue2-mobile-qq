const userModel = require("../models/userInfo");

module.exports = async (ctx, next) => {
    let userName = ctx.request.body.userName || '';
    let password = ctx.request.body.password || '';
    let nickName = ctx.request.body.nickName || '';
    let isVip = ctx.request.body.isVip || 0;
    let say = ctx.request.body.say || '';
    let userHead = ctx.request.body.userHead || '';
    let userBg = ctx.request.body.userBg || '';
    const row0=await userModel.findDataByName(userName);
    const res0=JSON.parse(JSON.stringify(row0));
    if(res0.length){
        ctx.body={
            code:201,
            success:false,
            message:'该qq号已存在！'
        }
    }else{
        const row = await userModel.register([userName, password, nickName, isVip, say, userHead, userBg]);
        const res = JSON.parse(JSON.stringify(row));
        if (res) {
            ctx.body = {
                code: 200,
                success: true,
                message: '注册成功',
                userInfo: {
                    userName: userName,
                    isVip: isVip,
                    nickName: nickName,
                    say: say,
                    userHead: userHead,
                    userBg: userBg,
                }
            }
        }
    }
}