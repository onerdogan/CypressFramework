describe('scroll',()=>{
    it('scroll into view',()=>{
        cy.visit('https://qa-environment.concorthotel.com/')

        cy.wait(2000)
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()
cy.wait
        cy.get('.col-md-7 > h2 > span')


    })
})