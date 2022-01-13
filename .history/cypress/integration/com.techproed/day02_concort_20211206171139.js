describe('concort hotel', ()=>{

it('testCase 1', ()=>{
    describe('',()=>{

        it('test 1',()=>{
    
    
        })
        it('test 1',()=>{
    
            
        })
        it('test 1',()=>{
    
            
        })
    })
cy.contains('Log in').click()

//Assret 
//1-
cy.url().should('include','Account/Logon')//url... iceriyormu

//2-
cy.get('#navLogon > .nav-link').should('have.text','Log in')//locate
//edilen yerdeki metinde ... yaziyormu

//3-be.visible
cy.get('.row > .mb-4').should('be.visible')//locate edilen yer gorunuyormu


//4-eq'--esitmi
cy.title().should('eq','Concort Hotel - Log in')

//5-include.text-text olarak iceriyormu
cy.get('.row > .mb-4').should('include.text','Log in')

})

})