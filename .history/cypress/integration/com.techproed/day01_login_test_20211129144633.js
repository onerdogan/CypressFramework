describe('concort hotel',()=>{
    it('URL test1',()=>{
        cy.visit('https://qa-environment.concorthotel.com/')//seleniundaki get gibi
        //login e tikla
        //1.yol
      //  cy.get('#navLogon > .nav-link').click()

        //2.yol
        cy.contains('Log in').click()//contains()elementi text olarak bulur

        ..username

    })
   




})