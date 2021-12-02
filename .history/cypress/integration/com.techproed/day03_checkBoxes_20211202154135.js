describe('checkboxes',()=>{
    it.skip('checking single box',()=>{
        //it.skip testi run etmez
        //it.only--sadece o testi calistirir

        cy.visit('http://automationpractice.com/index.php')
        
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
   
        cy.get('#layered_category_4').should('not.be.checked')
        //should('not.be.checked')--tikli olmadigini asserd ettik

        //tikla
        cy.get('#layered_category_4').check()
        cy.wait(2000)
        
        //tikli oldugunu assert et
        cy.get('#layered_category_4').should('be.checked')
        //tikli ise true return eder

        cy.get('#layered_category_4').uncheck()
            //tiklamayi kaldirir
                 
            cy.get('#layered_category_4').should('not.be.checked')
        //tikli olmadigini assert ettik

    })
    it('check all checkboxes',()=>{
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()

        //butun kutulara tukla
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)
        //https://www.npmjs.com/ bu siteye dikkat


        //butun tiklari kaldir
        cy.get("input[type='checkbox']").uncheck()
        cy.wait(3000)

    })

    it('click')
})