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
            cy.viewport(1000, 660)
        })
    })
    it("Load Website", () => {
        cy.visit('/renters/renter')
        cy.wait(3000)
       })
    
    it("Assert Data that  should be visible", function () {

        cy.get('#avatar-lily').should('be.visible');// Picture should be visible
        cy.get('.lily-voice').should('be.visible', this.data.firstPageData);// quote should be visible
    });
    it("userInput", function () {
        cy.get('#mat-input-0').type(this.data.firstName);
        //Entering UserName
        cy.get('#mat-input-1').type(this.data.lastName);
        //Entering LastName
        cy.get('#mat-input-2').type(this.data.DateofBirth);
        //Entering DateOfBirth
        cy.get('.mat-flat-button').click();
        //Clicking On Next Button
    });
    it("addressPageForVerification", function () {
        cy.get('#avatar-lily').should('be.visible');
        // Picture should be visible
        cy.get('#mat-input-3').type(this.data.address.address1);
        //Entering address
        cy.wait(3000);
        cy.get('.pac-item').click();
        //Clicked On fetched Address
        cy.get('#mat-input-7').type(this.data.apt);
       for(let n = 0; n < 3; n ++){
        cy.get('.mat-flat-button')
          .click()
      }
      //Clicking On Next Button
      });
    it("userCredentials", function () {
     
        cy.get('#avatar-lily').should('be.visible');
        //Picture should be visible
        cy.get('#mat-input-8').type(this.data.email);
        // Entering Email
        cy.get('#mat-input-9').type(this.data.phoneNo);
        //Entering PhoneNo
        cy.get('.mat-flat-button').dblclick();
        //Clicking On Next Button

    });
    it("personalQuestions", function () {
        cy.get('#avatar-lily').should('be.visible');
        // Picture should be visible
        cy.get('#mat-radio-4').click();
        //Selecting Any Option
        cy.get('.mat-flat-button').click();
        //Clicking On Next Button

    });
    it("lets talk business", function () {
        cy.get('#avatar-lily').should('be.visible');
        // Picture should be visible
        cy.get('#cdk-step-content-0-4 > .ng-star-inserted > .buttons > :nth-child(1)').contains("No").click();
        //Selecting Any Option
        cy.get('.mat-flat-button').click();
        //Clicking On Next Button
    });
    it("Last question", function () {
        cy.get('#avatar-lily').should('be.visible');
        // Picture should be visible
        cy.get('#cdk-step-content-0-5 > .ng-star-inserted > .buttons > :nth-child(1)').contains("No").click();
        //Selecting Any Option
        cy.get('.mat-flat-button').click();
        //Clicking On Next Button

    });
    it("Offers", function () {
        cy.get('#avatar-lily').should('be.visible');
        // Picture should be visible
        cy.get('app-coverage-details.ng-star-inserted > div.ng-untouched').should("be.visible");
        //Rates Should Be visible
        cy.wait(6000);
        cy.get('.mat-flat-button').click({ multiple: true });
        //Clicking On All Set Button

    });
    it("confirmationPage", function () {

        cy.get('#avatar-lily').should('be.visible');
        // Picture should be visible
        cy.get('.mat-horizontal-content-container').should('be.visible');
        //Checking Confirm Rates
        cy.get('.mat-checkbox-inner-container').click();
        //clicking on checkbox
        cy.get('.mat-flat-button').click();
        //Clicking on Continue To Payment

    });
    it("PaymentMode", function () {
        
        cy.get('#lbl_monthly_eft').click();
        //click on Monthly EFT Payment
        cy.get('.payment_options_wrapper > :nth-child(2)').should('be.visible');
        cy.get('.payment_options_wrapper > :nth-child(3)').should('be.visible');
        cy.get('.payment_options_wrapper > :nth-child(4)').should('be.visible');
        cy.get('.payment_options_wrapper > :nth-child(5)').should('be.visible');
        //Assert Selected Plans
        cy.get('.mat-flat-button').click();
        //Clicking on Continue

    });
    it("creditCard",function(){

        //Entering Account Details
        cy.get('#mat-input-14').type('111111111');
        cy.get('#mat-input-15').type('111111111111');
        cy.get('.mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
        cy.get('#mat-input-16').type('111111111111');
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-10 > .mat-option-text').click();        
        cy.get('app-eft-bank-info.ng-star-inserted > :nth-child(3)').should('be.visible')
        cy.get('app-eft-bank-info.ng-star-inserted > .pad-bottom').should('be.visible');
        cy.get('.mat-flat-button').click();
        //Clicking On Make Purchase
    })
   
})
