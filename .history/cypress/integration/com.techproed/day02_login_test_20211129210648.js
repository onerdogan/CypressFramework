describe('login',()=>{
  //  const eMail="qwert@gmail.com"
    const pass="qwert"

    const eMail="qwert@gmail.com"
    const pass="qwert"
    it.skip('login negatif',()=>{
        cy.visit('http://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()
        cy.get('#fail').should('include.text','Girdiğiniz bilgiler hatalıdır.')
        //fail bekledigimiz durumlarda kullanabiliriz

    })
    it('login positive',()=>{
        cy.visit('http://test.iyikisordun.com/login.php')


    })
})