const router = require("express").Router();
const { body } = require("express-validator");
const mysql=require('./connection').con
const {
    homePage,
    register,
    registerPage,
    login,
    loginPage,
    request,
    requestPage,
    adminhomePage,
    viewPage,
    viewCustPage,
} = require("./controllers/userController");

const ifNotLoggedin = (req, res, next) => {
    if(!req.session.userID){
        return res.redirect('/login');
    }
    next();
}

const ifLoggedin = (req,res,next) => {
    if(req.session.userID){
        return res.redirect('/home');
    }
    next();
}

router.get('/', ifNotLoggedin, homePage);
router.get('/home', ifNotLoggedin, homePage);
router.get("/login", ifLoggedin, loginPage);
router.get("/adminhome", ifNotLoggedin, adminhomePage);
//router.get("/viewcustomer", (req,res,any), viewCustPage);
router.get("/viewcustomer", (req, res) => {
    let qry = "select * from users";
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            
            res.render("viewcust", { user: results });
        }

    });
 });
 router.get("/vieworders", (req, res) => {
    let qry = "select * from request";
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            
            res.render("view", { user: results });
        }

    });
 });

 router.get("/mystatus", (req, res) => {
    const { phone } = req.query;
    let qry = "select * from request where mobile=?";
    mysql.query(qry, [phone], (err, results) => {
        if (err) throw err
        else {
            
            res.render("mystatus", { user: results });
        }

    });
 });

 router.get("/updateorder", (req, res) => {
    // fetch data

    const { id } = req.query;
    let qry = "update request set delevered='1' where id=?";

    mysql.query(qry, [id], (err, results) => {
        if (err) throw err
        else {
            if (results.affectedRows > 0) {
                res.redirect('/vieworders');
            }
        }
    });

});

 router.get("/detail",(req,res)=>{
    const { name } = req.query;
  
 });
router.post("/login",
ifLoggedin,
    [
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    login
);

router.get("/signup", ifLoggedin, registerPage);
router.post(
    "/signup",
    ifLoggedin,
    [
        body("_name", "The name must be of minimum 3 characters length")
            .notEmpty()
            .escape()
            .trim()
            .isLength({ min: 3 }),
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    register
);
router.get('/request', ifNotLoggedin, requestPage);
router.post(
    "/request",
    ifNotLoggedin,
    [
        
    ],
    request
);

router.get('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        next(err);
    });
    res.redirect('/login');
});

module.exports = router;