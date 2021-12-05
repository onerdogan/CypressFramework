describe('allerts',()=>{
    it.only('alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')


    })
    
    it('accept alert',()=>{
   cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   //2. buttona tikliyoruz(click for JS Confirm)
   //iptal ve tamam secenekleri cikiyor
   //cypress otomatok olarak tamami secer

   cy.get(':nth-child(2) > button').click()
   cy.get('#result').should('have.text','You clicked: Ok')



    })
    it('dissmis alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        //iptal butonunu secmek istesk
        //browser kontrolu icin on() fonksiyonunu seceriz
        //on()-> jquery bir fonksiyondur
        //windows(object):confirm(functionality)
        cy.on('window:confirm',(str)=>{
            return false
            //return true -->default olarak tamam tikla demektir
        })
        cy.get('#result').should('have.text','You clicked: Cansel')



})

it('entering text on the alert',()=>{
    //3.buttona tikla(click for JS Promt)
    //Hi yaz ve OK tikla
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.window()//pop up pencerelerini kontrol ediyoruz
        .then(($windowElement)=>{
            cy.stub($windowElement,'prompt').returns('Hi')
            cy.wait(4000)
            cy.get(':nth-child(3) > button').click()
        })
        cy.get('#result').should('have.text','You entered: Hi')

})
})