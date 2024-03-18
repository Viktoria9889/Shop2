const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

http://localhost:7000/api/user/registration
router.post('/registration', userController.registration)
http://localhost:7000/api/user/login
router.post('/login', userController.login)
//http://localhost:7000/api/user/auth
router.get('/auth', authMiddleware, userController.check)



module.exports = router