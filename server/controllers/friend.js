const friendModal=require('../models/friend');

module.exports=async function(ctx,next){
    const userId = ctx.request.query.userId||'';
    const row = await friendModal.getFriend(userId);
    const res=JSON.parse(JSON.stringify(row));
    console.log(res);
    ctx.body={
        code:200,
        success:true,
        friendList:res
    }
}