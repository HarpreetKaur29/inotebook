var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryis agood$boy';

const fetchuser = (req, res,  next)=>{
   //Get the user from thejwt token and add id to req object
   const token = req.header('auth-token');
   if(!token){
    res.status(401).send({error: "Pleasr authenticate usng a valid token"})
   }try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next()
   } catch (error) {
    res.status(401).send({error: "Pleasr authenticate usng a valid token"})
   }
   
}



module.exports = fetchuser;