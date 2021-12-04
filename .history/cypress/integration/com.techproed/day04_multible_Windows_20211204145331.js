describe('multiple windows',()=>{
    it('removing target',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(2000)
        cy.get('.example > a').invoke('removeAttr','target').click()
        //invoke('removeAttr','attribute name')...attributeyi siler
        //yeni sekme actirmaz, yeni sayfayi ayni sekmede actirir

        cy.get('h3').should('have.text','New Window')
        
    })
    it('yeni urlde acma',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(2000)
        //prop() ile 'href' attributenin degerini aldik, 
        //prop()->jquery de attribute degerini alan bir methotdur 
        cy
        .get('.example > a')
        .then((element)=>{
            const newUrl=element.prop('href')
        cy.visit(newUrl)
        })
        cy.get('h3').should('have.text','New Window')

    })
})