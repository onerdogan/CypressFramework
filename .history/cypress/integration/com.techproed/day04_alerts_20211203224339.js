describe('allerts',()=>{
    it('alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })
    it('accept alert',()=>{
   cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

   cy.get(':nth-child(2) > button').click()
   cy.get('#result').should('have.text','You clicked: Ok')



    })
    it('dissmis alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     
})