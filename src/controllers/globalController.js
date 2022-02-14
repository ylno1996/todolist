export const home = (req,res) => res.render("home");
export const individual = (req, res) => {
res.render("individual")};
export const confirmId = (req,res, next) => {
    console.log(req);
    next();
}