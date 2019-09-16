/*
write a middleware that will check for the username and password  and let the request 
continue to /api/users if credentials are good. return a 401 if the credentials are invalid.
Use the middleware to restrict access to the GET /api/users endpoint
*/

function validateUser(req, res, next) {
    const { username, password } = req.body;
    if (!req.body) {
        return res.status(401).json({ error: "Credentials are invalid" });
    } else {
        return res.status(200).json()
    }
    req.body = { username, password }
    next();
};

module.exports = validateUser;