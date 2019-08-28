import routes from "../routes";
import Video from "../models/Video";


export const home = async(req, res) => {
    try {
        const videos = await Video.find({}).sort({_id:-1});
        res.render("home", {pageTitle:"HOME", videos});
    } catch (error) {
        console.log(error);
        res.render("home", {pageTitle:"HOME", videos:[]});
    }
};

export const getJoin = (req, res) => {
    res.render("join", {pageTitle:"JOIN"});
};

export const postJoin = (req, res) => {
    const {
        body:{text, email, password, password2}
    }=req;
    
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle:"JOIN"});
    } else {
        res.redirect(routes.home);
    }
    
}
export const getLogin = (req, res) => res.render("login", {pageTitle:"LOGIN"});
export const postLogin = (req, res) => {
    if(routes.login){
        user.isAuthenticated = true;
    }
    res.redirect(routes.home)
}

export const logout = (req, res) => {
    user.isAuthenticated = false;
    res.redirect(routes.home);
}
export const search = async(req, res) => {
    const {
        query:{ term } 
    } =req;

    let videos = [];
    try {
        videos = await Video.find({ title : { $regex : term, $options : "i" } });
    } catch (error) {
        console.log(error);
    }
    res.render("search", {pageTitle:"SEARCH", term, videos });
};