const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const dbConnection = require("../utils/dbConnection");

// Home Page
exports.homePage = async (req, res, next) => {
    const [row] = await dbConnection.execute("SELECT * FROM `users` WHERE `id`=?", [req.session.userID]);
    const [row1] = await dbConnection.execute("SELECT COUNT(*) as mn FROM `users`");
    const [row2] = await dbConnection.execute("SELECT COUNT(*) as mn1 FROM `request` where `delevered` = 0");
    const [row3] = await dbConnection.execute("SELECT COUNT(*) as mn2 FROM `request` where `delevered` != 0");
    const [row4] = await dbConnection.execute("SELECT COUNT(*) as mn3 FROM `request`");
    if (row.length !== 1) {
        return res.redirect('/logout');
    }

    res.render('home', {
        user: row[0],nusers: row1[0],requested: row2[0],pending: row3[0],total: row4[0]
    });
}

exports.viewCustPage = async (req, res, next) => {
    const [row] = await dbConnection.execute("SELECT * FROM `users`");
    console.log(row);
    if (row.length !== 1) {
        return res.redirect('/logout');
    }

    res.render('viewcust', {
        user: row[0]
    });
}

// Register Page
exports.registerPage = (req, res, next) => {
    res.render("register");
};

// Request Page
exports.requestPage = (req, res, next) => {
    res.render("request");
};
exports.request = async (req, res, next) => {
    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('request', {
            error: errors.array()[0].msg
           
        });
    }

    try {

        const [rows] = await dbConnection.execute(
            "INSERT INTO `request`(`name`,`mobile`,`state`,`city`,`pin`,`address`,`type`,`cloth`,`weight`,`desc`,`idate`,`ddate`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
            [body.FullName, body.Mobile, body.State,body.City,body.PinCode,body.Address,body.Laundry,body.Cloths,body.Weight,body.Descriptions,body.Issued,body.Delivery]
        );

        if (rows.affectedRows !== 1) {
            return res.render('request', {
                error: 'Your Request Denied'
            });
        }
        
        res.render("request", {
            msg: 'You have successfully Requested.'
        });

    } catch (e) {
        next(e);
    }
};

// User Registration
exports.register = async (req, res, next) => {
    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('register', {
            error: errors.array()[0].msg
        });
    }

    try {

        const [row] = await dbConnection.execute(
            "SELECT * FROM `users` WHERE `email`=?",
            [body._email]
        );

        if (row.length >= 1) {
            return res.render('register', {
                error: 'This email already in use.'
            });
        }

        const hashPass = await bcrypt.hash(body._password, 12);

        const [rows] = await dbConnection.execute(
            "INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",
            [body._name, body._email, hashPass]
        );

        if (rows.affectedRows !== 1) {
            return res.render('register', {
                error: 'Your registration has failed.'
            });
        }
        
        res.render("register", {
            msg: 'You have successfully registered.'
        });

    } catch (e) {
        next(e);
    }
};

// Login Page
exports.loginPage = (req, res, next) => {
   
    res.render("login");
};

// Login Page
exports.adminloginPage = (req, res, next) => {
    res.render("adminhome");
};

exports.adminhomePage = async (req, res, next) => {
    const [row] = await dbConnection.execute("SELECT * FROM `users` WHERE `id`=?", [req.session.userID]);
    const [row1] = await dbConnection.execute("SELECT COUNT(*) as mn FROM `users`");
    const [row2] = await dbConnection.execute("SELECT COUNT(*) as mn1 FROM `request` where `delevered` = 0");
    const [row3] = await dbConnection.execute("SELECT COUNT(*) as mn2 FROM `request` where `delevered` != 0");
    const [row4] = await dbConnection.execute("SELECT COUNT(*) as mn3 FROM `request`");
    if (row.length !== 1) {
        return res.redirect('/logout');
    }

    res.render('adminhome', {
        user: row[0],nusers: row1[0],requested: row2[0],pending: row3[0],total: row4[0]
    });
}




// Login User
exports.login = async (req, res, next) => {

    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('login', {
            error: errors.array()[0].msg
        });
    }

    try {

        const [row] = await dbConnection.execute('SELECT * FROM `users` WHERE `email`=?', [body._email]);

        if (row.length != 1) {
            return res.render('login', {
                error: 'Invalid email address.'
            });
        }

        const checkPass = await bcrypt.compare(body._password, row[0].password);
        console.log(body._email);
        let str=body._email;
        if (checkPass === true &&  str === "jagadish@gmail.com") {
            req.session.userID = row[0].id;
            return res.redirect('/adminhome');
        }

        else if (checkPass === true) {
            req.session.userID = row[0].id;
            return res.redirect('/');
        }

        

        res.render('login', {
            error: 'Invalid Password.'
        });


    }
    catch (e) {
        next(e);
    }

}
