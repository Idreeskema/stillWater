class DatePickerPage{

        getDatePicker(){
            return cy.get('.mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon')
        }
        getCalander(){
            return cy.get('#mat-datepicker-0')
        }
        getNavigateBack(){
            return cy.get('.mat-calendar-previous-button')
        }
        getNavigateForward(){
            return cy.get('.mat-calendar-next-button')
        }
        getMonthName(){
            return cy.get(':nth-child(3) > [data-mat-col="0"]').click()
        }
        getYearName(){
            return cy.get(':nth-child(3) > [data-mat-col="0"]')
        }
        getDays(){
            return cy.get(':nth-child(4) > [data-mat-col="0"]')
        }
        
        
}
export default DatePickerPage