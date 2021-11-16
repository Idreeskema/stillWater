// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import dateUtils from "./utility/DateUtils";
import DatePickerPage from "./pageObjects/DatePickerPage";



 var datePickerPage = new DatePickerPage();
 var DateUtils =new dateUtils

 Cypress.Commands.add('selectYear',(yearName)=>{
    const currentYear=new Date().getFullYear()

    datePickerPage.getYearName().then(($year)=>{
        if($year.text()==yearName){
            cy.log(yearName='year is selected')
            return
        }
        else{
                if(yearName < currentYear)
                {
                    datePickerPage.getNavigateBack().click();
                    return
                }
                else if(yearName > currentYear){
                    datePickerPage.getNavigateForward().click();
                    cy.log('enable to go forward');
                    return
                }
}        

    cy.selectYear(yearName)

    })

})


Cypress.Commands.add('selectMonth',(monthName)=>{
        var dt = new Date
        let currentMonth = dt.getMonth() +1
        let givenMonth =DateUtils.getMonthIndexFromName(monthName)
       

        datePickerPage.getMonthName().then(($month)=>{


            if($month.text().includes(monthName)){

                cy.log(monthName+ 'month is selected')
                return
            }
            else{
                if(givenMonth > currentMonth){
                    datePickerPage.getNavigateForward().click()
                    
                }
                else if(givenMonth < currentMonth){
                    datePickerPage.getNavigateBack().click()
                   return
                }
                
            }
            cy.selectMonth(monthName)
        })
})

Cypress.Commands.add('selectDay',(dayName)=>{

    datePickerPage.getDays(dayName +1).click()
    cy.log(dayName+ 'day is selected')


})

