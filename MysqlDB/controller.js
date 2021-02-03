const {
    addSkin,
    createSkin,
    deleteSkin,
    modifySkin,
    viewAllCreatedSkin,
    viewAllSkin,
    login
} = require("./service");

const bcrypt = require('bcrypt');

module.exports = {
    addSkin: (req, res) => {
        const body = req.body;
        body.isCreated = 0;
        addSkin(body, (err, results) => {
            try {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            } catch (error) {

            }
        });
    },
    createSkin: (req, res) => {
        const body = req.body;
        createSkin(body, (err, results) => {
            try {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error',
                        err
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            } catch (error) {

            }

        });
    },
    deleteSkin: (req, res) => {
        const body = req.body;
        deleteSkin(body, (err, results) => {
            try {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            } catch (error) {

            }

        })
    },
    modifySkin: (req, res) => {
        const body = req.body;
        modifySkin(body, (err, results) => {
            try {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            } catch (error) {

            }
        });
    },
    viewAllCreatedSkin: (req, res) => {
        const body = req.body;
        viewAllCreatedSkin(body, (err, results) => {
            try {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            } catch (error) {
            }
        })
    },
    viewAllSkin: (req, res) => {
        viewAllSkin({}, (err, results) => {
            try {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            } catch (error) {

            }
        })
    },
    login: (req, res) => {
        const body = req.body;
        login(body, (err, results) => {
            try {
                if (err) {
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                if (!results) {
                    return res.json({
                        success: 0,
                        data: 'invalid email or password'
                    })
                }
                const resb = bcrypt.compareSync(body.password, results[0].password);
                if (resb) {
                    return res.status(200).json({
                        success: 1,
                        id: results[0].id,
                        message: 'login sucssfully',
                    });
                }
                else {
                    return res.status(200).json({
                        success: 0,
                        message: 'invalid email or password',
                    });
                }
            } catch (error) { }
        })
    }
}