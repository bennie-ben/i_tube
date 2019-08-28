import routes from "../routes";
import Video from "../models/Video";

export const videos = (req, res) => res.render("videos", {pageTitle:"VIDEOS"});
export const getUpload = (req, res) => res.render("upload", {pageTitle:"UPLOAD"});

export const postUpload = async (req, res) => {
    const {
        body : { title, description },
        file : { path }
    } = req;
    const newVideo = await Video.create({
        title,
        description,
        fileURL : path
    });

    console.log(newVideo);
    return res.redirect(routes.videoDetail(newVideo._id));
}
export const videoDetail = async (req, res) => {
    const  { params : { id } } = req;
    try {
        const video = await Video.findById(id);
        console.log(video);
        res.render( "videoDetail", { pageTitle : `${video.title}`, video });
    } catch ( error ) {
        console.log(error)
        res.send("ERROR");
    }
}
export const getEditVideo = async (req, res) => {
    const { params : { id } } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle:`EDIT ${video.title}`, video});
    } catch(error) {
        console.log(error)
        res.redirect(routes.home)
    }
}
export const postEditVideo = async (req, res) => {
    const  { 
            params : { id },
            body : { title, description }
        } = req;
    try{
        await Video.findOneAndUpdate( { _id : id } , {
            title,
            description
        })
        res.redirect(routes.videoDetail(id));
    } catch(error) {
        res.redirect(routes.home)
    }
}
export const deleteVideo = async (req, res) => {
    const {
        params : { id }
    } = req;
    try{
        await Video.findOneAndRemove({ _id:id })
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.home);
};