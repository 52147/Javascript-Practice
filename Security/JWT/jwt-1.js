// JWT(Json Web Token)
// privay data be encoded in JSON object using cryptographic algorithm
// used for authorication and authentication

// process:
// 1. authentication: 
//      - user login -> 
//      - server verifies credentials then generate JWT token(payload(user information) + secret key + claims) 
//      -> send back to frontend
// 2. Storage: frontend stores JWT in localSorage, sessions or cookies
// 3. Authorization: every request from client include the header with JWT in Bearer schema. backend verify it then send data back to frontend

// * user information: user id, user name
// * claims: expiration time, name, email, roles, permission,...

// JWT in node.js
// 1. install package : npm install jsonwebtoken
// 2. generate JWT: use jwt.sign to create token
// 3. use middleware to verify JWT token: use jwt.verify to decode token
// 4. Express integration: use it in login route protected route

//////////////////////////////////////////////////////////
const express = require('express');
const app = express();
app.use(express.json());


// generate JWT
const jwt = require('jsonwebtoken');

// define a payload
const payload = {
    userId:123,
    username:'johndoe',
    password:'password123'
}

// define a secret key
// use environment variable to protect secret key
const secretKey = process.env.JWT_SECRET

// generate a token
const token = jwt.sign(payload, secretKey,{expiresIn: '1h'});
//////////////////////////////////////////////////////////
// verify the token
// jwt.verify(token, secretKey, (err, decoded) => {
//     if(err){
//         console.log('Token verification failed:', err.message);
//     }else{
//         console.log('Token is valid. Decoded payload:', decoded)
//     }
// })
//////////////////////////////////////////////////////////

// integrate them to the login and protected router

// login route:
// do not need to verify token cause is to authenticate user and generate token
app.post('/login',(req, res) => {
    const {username, password} = req.body;
    const user = payload.find(u => u.username === username && u.password === password);
    if(user){
        const token = jwt.sign({userId: user.id, username: user.username}, secretKey, {expiresIn:'1h'});
        res.json({token});
    }else{
        res.status(401).json({message: 'Invalid username or password'});
    }
})


// protected route:
// token verification for protected route because this route only be accessible to the authenticated users
app.get('/protected', authenticateToken, (req, res) => {
    res.json({message: 'This is a protected route', user: req.user});
})

// middleware to verify the token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(token){
        jwt.verify(token, secretKey, (err, decoded) => {
            if(err){
                return res.status(403).json({message: 'Invalid token'});
            }else{
                req.user = decoded; // decoded payload contain user id and user name be assigned to req.user and pass to the route handler
                next(); // pass control to next middle or router handler
            }
        })
    }else{
        res.status(401).json({message: 'Token required.'});
    }
}

// start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost/3000');
})

// https://github.com/52147/AugMend-Health-Backend/blob/main/routes/auth.js#L22