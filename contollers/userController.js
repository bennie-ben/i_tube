export const users = (req, res) => res.render("users", {pageTitle:"USERS"});
export const userDetail = (req, res) => {
    res.render("userDetail", {pageTitle:"DETAIL"});
}
export const editProfile = (req, res) => {
    res.render("editProfile", {pageTitle:"EDIT"});
}
export const changePassword = (req, res) => res.render("changePassword", {pageTitle:"CHANGEPASSWORD"});

