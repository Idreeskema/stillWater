
let txt
let btn2
export class text1 {


    navigate(url) {
        cy.visit(url)
        cy.wait(3000);
    }

    abc() {
        cy.get('.anchor').then(($btn) => {
                //.anchor

            // store the button's text
            txt = $btn.text()
        })
        cy.fixture('Data').then(($btn2) => {
            btn2 = $btn2.Phoneno;

            expect(btn2).to.include(txt);
            cy.xpath('//span[normalize-space()="Contact Us"]').click()

        })
        cy.get('a.mat-focus-indicator').invoke('text').then((textOfElement) => {
            expect(textOfElement.trim()).to.equal(txt)
        })
    }
    abc2() {
        cy.get('.linkPhone').then(($btn) => {
                

            txt = $btn.text()
        })
        cy.fixture('Data').then(($btn2) => {
            btn2 = $btn2.Phoneno;

            expect(btn2).to.include(txt);

        })
        cy.get(':nth-child(12) > .mat-button-wrapper ').click({ force: true })

        cy.get('a.mat-focus-indicator').invoke('text').then((textOfElement) => {
            expect(textOfElement.trim()).to.equal(txt)
        })



    }

    test() {
        return new Promise((resolve,reject)=>{
        cy.get(".nav-toolbar-menu").then(($body) => {
            if (find('Contact Us')) {   //evaluates as true
                resolve()
                return this.abc()
             
            }
            else{
                
               return this.abc2()
                reject()
            }
        });

    })
    }


}
//$body.find("Contact Us").length =1