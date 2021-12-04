import 'cypress-iframe'
//cypres ru
describe('iframes',()=>{
    it('iframe1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain','Editor')

        cy.frameLoaded('#mce_0_ifr')
        cy.iframe().find('p').clear()

    })
})