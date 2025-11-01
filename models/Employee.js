const mongoose=require("mongoose")
const EmployeeSchema=new mongoose.Schema({
      empName: { type: String, require: true },
     empDesignation: { type: String, require: true },
  empAddress: { type: String, require: true },
   empSalary: { type: String, require: true },
    email: { type: String, require: true, unique: true },
     phoneNo: { type: String, require: true },
     joiningdate:{type:String,require:true}


})

const Employee=mongoose.model("Employee",EmployeeSchema)
module.exports=Employee