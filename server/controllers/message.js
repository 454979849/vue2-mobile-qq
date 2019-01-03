const messageModel = require("../models/message");

module.exports =async function (ctx, next) {
    const userId = ctx.request.query.userId||'';
    const row = await messageModel.getMessage(userId);
    console.log(row);
    const res=JSON.parse(JSON.stringify(row));
    ctx.body={
        code:200,
        success:true,
        messageList:res
    }
}