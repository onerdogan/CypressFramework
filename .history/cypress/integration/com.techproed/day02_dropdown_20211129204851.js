describe('dropdown', ()=>{
it('dropdown test', ()=>{

cy.visit('https://the-internet.herokuapp.com/dropdown')
cy.
get('#dropdown').
select('Option 1')


})

})