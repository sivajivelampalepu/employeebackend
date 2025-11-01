const ExcelJs=require('exceljs')
const fs=require('fs')
const Candidate = require('../models/candidate')
exports.generateExcel=async(req,res)=>{
    try{
           const candidatelist=await Candidate.find()
           const workbook=new ExcelJs.Workbook()
           const worksheet=workbook.addWorksheet('Canidates')

           worksheet.addRow(['Name','DOB','Email','Experience'])
           candidatelist.forEach(user => {
            worksheet.addRow([user.name,user.dob, user.email, user.experience]);
          });
        
          // Set Column Widths
          worksheet.columns = [
            { header: "Name", key: "name", width: 20 },
            { header: "DOB", key: "dob", width: 30 },
            { header: "Email", key: "email", width: 30 },
            { header: "Experience", key: "experience", width: 10 }
          ];

          const filePath="candidate.xlsx"
          await workbook.xlsx.writeFile(filePath);

          // Send File to Client
          res.download(filePath, "candidate.xlsx", (err) => {
            if (err) {
              console.error("Error downloading file:", err);
            }
            fs.unlinkSync(filePath); 
        });
    }
    catch(err)
    {
        res.status(500).json({
            message:"Unable to Generate"
        })

    }

}