module.exports = function(req, res) {
    res.clearCookie('recordarme');

    
    if (req.session.user) {
        req.session.destroy();
        res.redirect("/user/login");
    }
}
