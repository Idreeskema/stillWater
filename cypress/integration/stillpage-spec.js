import { functionData } from "../Functions/stillWater"
import DatePickerPage from "../support/pageObjects/DatePickerPage";
/// <reference types="cypress" />

const obj = new functionData
describe("Test Still Water", () => {

    beforeEach(function () {
        cy.fixture('example').then((testdata) => {
            this.data = testdata


        })
    })
    it("Load Website", () => {
        cy.visit('/renters/renter')

    })


    it("Assert on First Page", function () {

        cy.get('#avatar-lily').should('be.visible')
        cy.get('.lily-voice').should('be.visible', this.data.firstPageData)
    })
    it('Insert Data',function(){
        obj.firstName().type(this.data.firstName)
        obj.lastName().type(this.data.lastName)
        var datePickerPage = new DatePickerPage
    datePickerPage.getDatePicker().click()
    datePickerPage.getCalander().should('be.visible');

    cy.selectYear(2000)
    
    cy.selectMonth('January')
    cy.selectDay(28)
    })

})