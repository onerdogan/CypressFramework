describe('hooks',()=>{
    before(()=>{
        console.log('before method')
    })

    beforeEach(()=>{
        console.log('beforeEach method')
        cy.visit('https://qa-environment.concorthotel.com/')

    })

    after(()=>{
        console.log('after methot')
    })

    afterEach(()=>{
        console.log('afterEach method')
        cy.url().should('include','com')
    })

    it('test 1',()=>{
        cy.contains('Log in').click

    })
  
})