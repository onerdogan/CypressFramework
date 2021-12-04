import 'cypress-iframe'

describe('iframes',()=>{
    it('iframe1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should
    })
})