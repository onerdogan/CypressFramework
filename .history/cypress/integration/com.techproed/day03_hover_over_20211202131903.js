describe('hover over',()=>{
    it('move over',()=>{

        cy.visit('https://amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')
        //trigger()--mouse'i hareket ettirir
        //change country/region
        cy.contains('Change country/region').click()

        //select canada
        //cy.get('#icp-selected-country').select('Canada')
        //yukaridaki locater bu tag icerisinde geciyor .ancak
        //cy.select() kodu kullanirken locaterlarin
        cy.get('#icp-selected-country').select('Canada')
    })
})