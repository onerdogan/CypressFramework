describe('checkboxes',()=>{
    it('checking single box',()=>{

        cy.visit('http://automationpractice.com/index.php')
        
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
   
        cy.get('#layered_category_4').should('not.be.checked')
        //should('not.be.checked')--tikli olmadigini asserd ettik

        //tikla
        cy.get('#layered_category_4').checked()

    })
})