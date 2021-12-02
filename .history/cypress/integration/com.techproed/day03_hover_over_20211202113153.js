describe('hover over',()=>{
    it('move over',()=>{

        cy.visit('https://amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')
        //trigger()--mouse'i 
    })
})