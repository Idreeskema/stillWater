import {info} from './userData'
import { elements } from './locators';

export class text{

    
    navigate(url){
        cy.visit(url)
        cy.get(':nth-child(7) > .mat-button-wrapper').click();
        cy.wait(3000);
    }
    
    enterFirstName(){
        let firstName=info.fname;
        let fsel=elements.fNameSel;
        cy.get(fsel).type(firstName,{force:true})

    }
    enterLastName(){
        let lastName=info.lName;
        let lsel=elements.lNameSel;
        cy.get(lsel).type(lastName+this.generateString(5),{force:true})

    }
    enterStreetAddress(){
        let add=info.address;
        let location=elements.address;
        cy.get(location).type(add)

    }
    appUnit(){
        let unt=info.appunt;
        let location=elements.app;
        cy.get(location).type(unt)

    }
   zipCode(){
    let code=info.pincode;
    let zcode=elements.addCode;

        cy.get(zcode).type(code+'{enter}')

    }
   phoneNumber(){
    let call=info.number;
    let phNo=elements.num;

        cy.get(phNo).type(call+Math.floor(Math.random()*100))

    }
    emailAddress(){
    let msg=info.mail;
    let msgMail=elements.email;

        cy.get(msgMail).type(msg+Math.floor(Math.random()*100)+'@mail.com')

    }
    refferedBy(){
    let details=info.ref;
        let refText=elements.ref;
        cy.get(refText).type(details)

    }
    onSubmit(){
   cy.contains('Start My Quote').click({ multiple: true })
        
    }
    generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
}