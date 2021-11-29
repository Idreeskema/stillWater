/// <reference types="cypress" />



describe("Test Still Water", () => {
    afterEach(function() {
        if (this.currentTest.state === 'failed') {
          Cypress.runner.stop()
        }
      });

    beforeEach(function () {
        cy.fixture('example').then((testdata) => {
            this.data = testdata


        })
    })
    it("Load Website", () => {
        cy.visit('/renters/renter')
        cy.wait(3000)
       

    })
    
        
    
    it("Assert on First Page", function () {

        cy.get('#avatar-lily').should('be.visible');
        cy.get('.lily-voice').should('be.visible', this.data.firstPageData);
    });
    it("userInput", function () {
        cy.get('#mat-input-0').type(this.data.firstName);
        cy.get('#mat-input-1').type(this.data.lastName);
        cy.get('#mat-input-2').type(this.data.newDate);
        cy.get('.mat-flat-button').click();
    });
    it("secondPage", function () {
        cy.get('#avatar-lily').should('be.visible');
        cy.get('#mat-input-3').type(this.data.address.address1);
        cy.wait(3000);
        cy.get('.pac-item').click();
        cy.get('#mat-input-7').type(this.data.apt)
        cy.get('.mat-button-wrapper').dblclick();
    });
    it("thirdPage", function () {
     
        //cy.get('#avatar-lily').should('be.visible');
        cy.get('#mat-input-8').type(this.data.email);
        cy.get('#mat-input-9').type(this.data.phoneNo);
        cy.get('.mat-flat-button').dblclick();
    });
    it("fourthPage", function () {
        cy.get('#avatar-lily').should('be.visible');
        cy.get('#mat-radio-4').click();
        cy.get('.mat-flat-button').click();
    });
    it("fifthPage", function () {
        cy.get('#avatar-lily').should('be.visible');
        cy.get('#cdk-step-content-0-4 > .ng-star-inserted > .buttons > :nth-child(1)').contains("No").click();
        cy.get('.mat-flat-button').click();
    });
    it("Sixth", function () {
        cy.get('#avatar-lily').should('be.visible');
        cy.get('#cdk-step-content-0-5 > .ng-star-inserted > .buttons > :nth-child(1)').contains("No").click();
        cy.get('.mat-flat-button').click();
    });
    it("PaymentScreen", function () {
        cy.get('#avatar-lily').should('be.visible');
        cy.get('app-coverage-details.ng-star-inserted > div.ng-untouched').should("be.visible");
        cy.wait(6000);
        cy.get('.mat-flat-button').click({ multiple: true });
    });
    it("confirmationPage", function () {

        cy.get('#avatar-lily').should('be.visible');
        cy.get('.mat-horizontal-content-container').should('be.visible');
        cy.get('.mat-checkbox-inner-container').click();
        cy.get('.mat-flat-button').click();


    });
    it("PaymentMode", function () {
        
        cy.get('#lbl_monthly_eft').click();
        cy.get('.payment_options_wrapper > :nth-child(2)').should('be.visible');
        cy.get('.payment_options_wrapper > :nth-child(3)').should('be.visible');
        cy.get('.payment_options_wrapper > :nth-child(4)').should('be.visible');
        cy.get('.payment_options_wrapper > :nth-child(5)').should('be.visible');
        cy.get('.mat-flat-button').click();

    });
    it("creditCard",function(){

        cy.get('#mat-input-14').type('111111111');
        cy.get('#mat-input-15').type('111111111111');
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
        cy.get('#mat-input-16').type('111111111111');
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-10 > .mat-option-text').click();        
        cy.get('app-eft-bank-info.ng-star-inserted > :nth-child(3)').should('be.visible')
        cy.get('app-eft-bank-info.ng-star-inserted > .pad-bottom').should('be.visible');
        cy.get('.mat-flat-button').click();
    })
   


 
})
