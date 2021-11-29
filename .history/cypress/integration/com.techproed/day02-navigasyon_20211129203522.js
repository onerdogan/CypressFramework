describe('Navigasyon',()=>{

    it.skip('back,forward,reflesh', ()=>{//skip, testi test blogunda calistirmaz
        cy.visit('https://qa-environment.concorthotel.com/')
        cy.contains('Log in').click()
      //  cy.go('back')//onceki sayfaya git
      cy.go(-1)// onceki sayfaya git

      cy.go('forward')
      cy.go(1)//ileri git
        cy.wait(2000)
      cy.reload()//sayfayi tekrar yukle

    })
    it('zincirleme navigasyon',()=>{
        cy.visit('https://qa-environment.concorthotel.com/')
        cy.contains('Log in')
        .click()
        .go('back')
        .go('forward')
        .go('back')

        cy.reload(true)
        .conte


    })
})