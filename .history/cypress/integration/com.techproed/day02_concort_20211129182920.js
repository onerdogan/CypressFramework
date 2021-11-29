describe('concort hotel', ()=>{

it('testCase 1', ()=>{
    cy.visit('https://qa-environment.concorthotel.com/')

cy.contains('Log in').click()

//Assret 
//1-
cy.url().should('include','Account/Logon')//u

//2-
cy.get('#navLogon > .nav-link').should('have.text','Log in')

//3-
cy.get('.row > .mb-4').should('be.visible')//
})

})