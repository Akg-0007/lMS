const jwt = require('jsonwebtoken')

const verifyToken = async (token) => {
    try  {
        const decodedToken = await jwt.decode(token, {complete: true});
        const tokenExpirationTime = decodedToken.payload.exp
        const currentTimestamp = Math.floor(Date.now() / 1000);

        if (currentTimestamp > tokenExpirationTime) {
            throw new Error("Token has expired");
          }
          
        return await jwt.verify(token, process.env.SECRET)
    } catch(error) {
        throw new Error(error.message)
    }
}


module.exports = {
    verifyToken
}