describe('scroll',()=>{
    it('scroll into view',()=>{
        cy.visit('https://qa-environment.concorthotel.com/')

        cy.
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        


    })
})