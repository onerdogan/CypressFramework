describe('XHR - XML, HTTP, Request', () => {
    
    //XHR, JavaScript ile sunulmus bir API
    //Web sitesini es zamanli olarak arka planda calisan olaylari takip eder.

    const requestURL= "https://jsonplaceholder.cypress.io/comments"
    it('XHR Example 1',()=>{
        cy.request(requestURL).should((response)=>{
            console.log(response)
            assert.equal(response.status,200)
            expect(response.statusText).to.eq('OK')
        })

    })
})