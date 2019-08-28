import express from "express";
import routes from "../routes";
import { multerVideo } from "../middleware";
import { 
    videos, 
    getUpload, 
    postUpload, 
    videoDetail, 
    getEditVideo,
    postEditVideo, 
    deleteVideo } from "../contollers/videoController";


const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, multerVideo, postUpload);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);


export default videoRouter;

