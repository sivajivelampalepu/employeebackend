const express=require('express')
const EmployeeController=require('../controllers/employeecontroller')
const router=express.Router()
router.route("/saveEmp").post(EmployeeController.createEmployee)
router.route("/updateEmp/:id").put(EmployeeController.UpdateEmployee)
router.route("/employeelist").get(EmployeeController.getEmployeeDetails)
router.route("/deleteEmp/:id").delete(EmployeeController.DeleteEmployee)

module.exports=router