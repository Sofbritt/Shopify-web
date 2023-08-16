const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers.access_token;
    // console.log(JSON.stringify(req.headers.access_token));
    console.log('i work');
    if (!token) {
        return res.status(401).json({message:'You are not authenticated'})
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return res.status(403).message({message: 'Token is not valid'})
        }
        console.log(user)
        req.user = user
        next()
    })
}

module.exports = {
    verifyToken
}