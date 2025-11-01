const nodemailer=require('nodemailer')

const sendEmail=async options=>{
    //create Transporter
    const transporter=nodemailer.createTransport({
        service:'Gmail',
        auth:{
            host:'sandbox.smtp.mailtrap.io',
            port:'25',
            user:'b22001b3a53d71',
            pass:'40db2fba8fc727'
        }
    });
    //define the emaill options

    const mailOptions={
        from:'sivaji v <hello@sagsejg>',
        to:options.email,
        subject:options.subject,
        text:options.message,
    };
    //send the mailo
  await transporter.sendMail(mailOptions)
}

module.exports=sendEmail