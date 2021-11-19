const router = require('express').Router();
const {registerUser, authenticateUser} = require('../controllers/postControllers')
const {validatePasswords} = require('../controllers/middleware')


router.get('/', (req, res)=>res.send('Home is the best!'))
router.post('/newUser', validatePasswords, registerUser)
router.post('/login', authenticateUser)


module.exports = router;