module.exports = {
    showHome: (req, res) => {
        res.render('pages/home.ejs');
    },
    contact:(req,res)=>{
res.render('pages/contact.ejs')
    }
}