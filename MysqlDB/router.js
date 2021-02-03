const {
    addSkin,
    createSkin,
    deleteSkin,
    modifySkin,
    viewAllSkin,
    viewAllCreatedSkin,
    login
} = require("./controller");

const router = require("express").Router();

router.post('/createSkinCondition', createSkin);
router.post('/addSkinCondition', addSkin);
router.put('/modifySkinCondition', modifySkin);
router.post('/deleteSkinCondition', deleteSkin);
router.get('/viewAllSkinCondition', viewAllSkin);
router.post('/viewAllCreatedSkinCondition', viewAllCreatedSkin);
router.post('/logIn', login);

module.exports = router;