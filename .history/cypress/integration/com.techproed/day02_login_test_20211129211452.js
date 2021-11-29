describe("login", () => {
  //  const eMail="qwert@gmail.com"
  //  const pass="qwert"
  const eMail = "cypress_test_1@gmail.com";
  const pass = "admin_123";

  it.skip("login negatif", () => {
    cy.visit("http://test.iyikisordun.com/login.php");
    cy.get('[type="email"]').type(eMail);
    cy.get('[type="password"]').type(pass);
    cy.get(".btn").click();
    cy.get("#fail").should("include.text", "Girdiğiniz bilgiler hatalıdır.");
    //fail bekledigimiz durumlarda kullanabiliriz
  });
  it("login positive", () => {
    cy.visit("http://test.iyikisordun.com/login.php");
    cy.get('[type="email"]').type(eMail);
    cy.get('[type="password"]').type(pass);
    cy.get(".btn").click();
    cy.get(".m-0").should("have.text", "Dashboard");
    cy.url().should('include
  });
});
