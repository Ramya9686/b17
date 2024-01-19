class addEmployeePage{

   addEmployeeSubMenue(){

    return 'Add Employee'

   }  

   firstNameInput(){

    return 'input[name="firstName"]'

   }

   lastNameInput(){

    return 'input[name="lastName"]'

   }

   saveBtn(){

    return 'button[type="submit"]'

   }

   successmessage(){

    return 'Successfully Saved'
   }

}

const addemployee = new addEmployeePage

export default addemployee