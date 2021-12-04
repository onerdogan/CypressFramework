import 'cypress-iframe'
//cypres runnerin iframe ile iletisime gecmesi icin gerekli kodlari tanimlar
describe('iframes',()=>{
    it('iframe1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain','Editor')

        cy.frameLoaded('#mce_0_ifr')//iframein yerini tanimliyoruz, iframe'ciyi yukle
        cy.iframe().find('p').clear()
        //

    })
})