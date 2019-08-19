import routes from "./routes";
export const middleware = (req, res, next) =>{
    res.locals.siteName = "I-TUBE";
    res.locals.routes = routes;
    next();
}