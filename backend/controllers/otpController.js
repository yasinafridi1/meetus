const otpservices = require("../services/otpservices");


class otpController{
    sendOtp(req,res){
       const { phone } = req.body;
       if(!phone){
        return res.status(401).json({"msg":"Phone number is required"});
       }

       const otp = otpservices.generateOtp();
       console.log(otp);

       const ttl = 1000*60*2;
       const expiry = Date.now() + ttl;
    }
}


module.exports = new otpController;