const Employee = require("../models/Employee");


exports.createEmployee=async(req,res)=>{
    try{
        const savedata=new Employee(req.body)
        const dataseve=await savedata.save()
        res.status(200).json({
            status:"01",
            message:"successfully save",
            data:dataseve
        })

    }
    catch(err)
    {
        res.status(500).json({
            status:"fail",
            message:"Unable to save"
        })

    }

}

exports.getEmployeeDetails=async(req,res)=>{
    try{
        let employeeList=await Employee.find()
        res.status(200).json(employeeList)
    }
    catch(err)
    {
        res.status(500).json({
            status:"fail",
            message:"Unable To Fetch Details",
            err:err
        })

    }

}
exports.DeleteEmployee=async(req,res,next)=>{
    try{
        const deleterecord=await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"success",
            message:"delete Successfully",
            deleteditem:deleterecord
        })

    }catch(err)
    {  res.status(500).json({
        status:"fail",
        message:err
    })

    }
}


exports.UpdateEmployee=async(req,res)=>{
    try{
            const empid=req.params.id;
         
            const body=req.body
            const updaterecord=await Employee.findByIdAndUpdate(empid,body,{new:true})

            res.status(200).json({
                status:"01",
                message:"Successfully Updated"
            })
    }
    catch(err)
    {
        res.status(500).json({
            status:"fail",
            message:"Unable to Update"
        })
    }

}