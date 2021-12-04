describe("My First Test", () => {
    //describe ('isim','test icin olusturulacak fonksiyolar)
    it("URL Testi", () => {
      //test'i tanimliyoruz. @Test gibi
      //it('testin ismi', 'olusturulacak fonksiyonlar')
  
      //URL adresinde google varmi
      cy.visit("https://www.google.com/")