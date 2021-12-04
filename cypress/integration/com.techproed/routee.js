describe("My First Test", () => {
    it("URL Testi", () => {
      
      cy.visit("https://www.routee.net/")
      cy.get('[for="drop"]').click()
      cy.get('.mid-menu > :nth-child(6) > :nth-child(1)').trigger('mouseover')
      cy.wait(3000)
      cy.get('#hd-nb > ul > div.mid-menu > li:nth-child(6) > ul > li:nth-child(2) > a').click()

    })
})