describe('dropdown', ()=>{
it('dropdown test', ()=>{

cy.visit('https://the-internet.herokuapp.com/dropdown')
cy.
get('#dropdown').
select('Option 1').s
cy.wait(1000)
//select option 2
cy.
get('#dropdown').
select('Option 2')



})

})