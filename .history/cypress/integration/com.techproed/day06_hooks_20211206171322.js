describe('hooks',()=>{
    before(()=>{
        console.log('before method')
    })

    beforeEach(()=>{
        console.log('beforeEach method')
        cy.visit('https://qa-environment.concorthotel.com/')

    })

    after(()=>{
        console.log('after methot')
    })

    afterEach(()=>{
        
    })

    it('test 1',()=>{


    })
    it('test 1',()=>{

        
    })
    it('test 1',()=>{

        
    })
})