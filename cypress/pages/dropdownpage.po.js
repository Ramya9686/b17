class dropdownpage{

selectmonth(month){

return  cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(month)

}

}

const dropdown = new dropdownpage()

export default dropdown