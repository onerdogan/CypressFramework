describe("My First Test", () => {
    it("URL Testi", () => {
      
      cy.visit("https://www.routee.net/")
      cy.get('[for="drop"]').click()
      cy.get('.mid-menu > :nth-child(6) > :nth-child(1)').scrollIntoView()
      

    })
})