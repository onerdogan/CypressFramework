describe('login',()=>{
    const eMail="qwert@gmail.com"
    const pass="qwert"
    it('login',()=>{
        cy.visit('http://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]')

    })
})