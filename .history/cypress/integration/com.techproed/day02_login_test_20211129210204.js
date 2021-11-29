describe('login',()=>{
    const eMail="qwert@gmail.com"
    const pass="qwert"
    it('login negatif',()=>{
        cy.visit('http://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()
        cy.get('#fail').should()

    })
})