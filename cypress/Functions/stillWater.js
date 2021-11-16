import { elements } from "../Pages/locators";


export class functionData {




    firstName() {
        let flocator = elements.fNameSel;

        return cy.get(flocator)
    }
    lastName() {
        let llocator = elements.lnameSel;

        return cy.get(llocator)
    }
}
