describe('checkboxes',()=>{
    it('checking single box',()=>{

        cy.visit('http://automationpractice.com/index.php')
        
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
    })
})