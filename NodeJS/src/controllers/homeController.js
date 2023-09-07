let db = require("../models/index");
let CRUDService = require("../services/CRUDService");
let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();

        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    }catch (e) {
        console.log(e);
    }
}
let getAboutPage = (req, res) => {
    return res.render("about/about.ejs");
}
let getCRUDPage = (req, res) => {
    return res.render('crudpage.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}
let getCRUDPageIndex = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('crudpageindex.ejs',{
        data: data
    });
}
let getEditCRUDPage = async (req, res) => {
    let userId = req.query.id;
    if(userId){
        let userData = await CRUDService.getUserInfoById(userId);
        if (userData) {
            return res.render('crudpageupdate.ejs',{
               data: userData,
            });
        }
    }else{
        return res.send('User not found!');
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDService.updateUserData(data);
    return res.send('Update done!');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUDPage: getCRUDPage,
    postCRUD: postCRUD,
    getCRUDPageIndex: getCRUDPageIndex,
    getEditCRUDPage: getEditCRUDPage,
    putCRUD: putCRUD,
}