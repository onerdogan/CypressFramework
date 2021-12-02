describe('scroll',()=>{
    it('scroll into view',()=>{
        cy.visit('https://qa-environment.concorthotel.com/')

        cy.wait(2)
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        


    })
})