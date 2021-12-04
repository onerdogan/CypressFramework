describe('multiple windows',()=>{
    it('removing target',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait()
        cy.get('.example > a').invoke('removeAttr','target').click()

    })
})