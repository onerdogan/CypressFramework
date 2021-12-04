import 'cypress-iframe'
//cypres runnerin iframe ile iletisime gecmesi icin gerekli kodlari tanimlar
describe('iframes',()=>{
    it('iframe1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('h3').should('contain','Editor')

        cy.frameLoaded('#mce_0_ifr')//iframein babasinin yerini tanimliyoruz, iframe'ciyi yukle
       //drivet.switchTo().frame('#mce_0_ifr')==>selenium
        cy.iframe().find('p').clear()
        //iframe icindeki p tagi'nin yerini bul burdakileri sil

        cy.iframe().find('p').type('ozgur kus')

        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium')
        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()
    })
})