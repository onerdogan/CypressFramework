describe('allerts',()=>{
    it('alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')


    })
    /*
    it('accept alert',()=>{
   cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

   cy.get(':nth-child(2) > button').click()
   cy.get('#result').should('have.text','You clicked: Ok')



    })
    it('dissmis alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(3) > button').click()
        cy.on('window:confirm',(str)=>{
            return false
        })


})*/

it('entering text on the alert',()=>{
    //3.buttona tikla(click for JS Promt)
    //Hi yaz ve OK tikla
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.window()//pop up pencerelerini kontrol ediyoruz
        .then(($windowElement)=>{
            cy.stu
        })

})
})