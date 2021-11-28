describe("My First Test", () => {
  //describe ('isim','test icin olusturulacak fonksiyolar)
  it("URL Testi", () => {
    //test'i tanimliyoruz. @Test gibi
    //it('testin ismi', 'olusturulacak fonksiyonlar')

    //URL adresinde google varmi
    cy.visit("https://www.google.com/");//site adresine gider
    cy.url().should('include','google')//url testi icin shouldassertion icin kullanilir

  });
});
