var express = require('express');
var router = express.Router();

let userController = require('../controllers/userController');
let loginValidator = require('../validations/loginValidator');

/* GET users listing. */
router.get('/register',userController.register);
router.post('/register',userController.processRegister);

router.get('/login',userController.login);
router.post('/login',loginValidator, userController.processLogin);

router.get('/profile',userController.profile);
router.get('/edit',userController.editProfile);
router.put('/profile/edit/:id',userController.update);

router.get('/logout',userController.logout);
router.delete('/delete/:id',userController.delete);

module.exports = router;
