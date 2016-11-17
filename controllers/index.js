// index:

module.exports = {
    'GET /': async (ctx, next) => {
        let user = ctx.state.user;
        console.log(ctx + '22222')
        if (user) {
            ctx.render('room.html', {
                user: user
            });
        } else {
            ctx.response.redirect('/signin');
        }
    }
};
