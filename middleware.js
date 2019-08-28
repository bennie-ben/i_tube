import routes from "./routes";
import upload from "multer";

const multer = upload({ dest:'uploads/videos/' })

export const middleware = (req, res, next) =>{
    res.locals.siteName = "I-TUBE";
    res.locals.routes = routes;
    next();
};

export const multerVideo = multer.single("video");