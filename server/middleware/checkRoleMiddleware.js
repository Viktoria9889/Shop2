const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]//Bearer njkfnkejwfnlnflknfl
            if (!token) {
                return res.status(401).json({ message: 'Не авторизований' })
            }
            const decoded = jwt.verify(token, process.env.ACCESS_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({ message: 'Немає доступу' })
            }
            req.user = decoded
            next()
        } catch (err) {
            res.status(401).json({ message: 'не авторизований' })
        }
    }
}