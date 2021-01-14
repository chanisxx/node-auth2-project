const JWT = require("jsonwebtoken");



function restrict(role) {
    const roles = ['basic', 'admin'];
    // 1 == 'basic', 2 == 'admin'

    return async (req, res, next) => {
        try {
            const token = req.cookies.token;

            if(!token) {
                return res.status(401).json({
                    message: "Invalid credentials"
                })
            }

            JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if(err) {
                    return res.status(401).json({
                        message: "Invalid credentials"
                    })
                }

                if(
                    // role && //why??
                    roles.indexOf(decoded.user.role) < roles.indexOf(role)) {
                    return res.status(401).json({
                        message: "You're not authorized",
                        decoded
                    })
                }

                req.token = decoded;
                next();

            })

        } catch(err) {
            next(err)
        }
    }
};

module.exports = {
    restrict
}