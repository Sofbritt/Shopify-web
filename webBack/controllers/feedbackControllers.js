require('dotenv').config();

const sendFeedBack = async (req, res) => {
    try {
       
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            port: 465,
            secure: true,
            service: "gmail",
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: 'harutyunyansofi15@gmail.com',
                pass: process.env.appPassword
            }
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: 'harutyunyansofi15@gmail.com', // sender address
            to: "sofi.harutyunyan23@gmail.com", // list of receivers
            subject: "Feedback", // Subject line
            text: req.body.message, // plain text body
        });
        res.status(200).json(info.messageId);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
}

module.exports = {
    sendFeedBack
};