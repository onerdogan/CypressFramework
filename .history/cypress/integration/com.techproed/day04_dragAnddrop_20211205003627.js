import '@4tw/cypress-drag-drop'
import { countBy } from 'lodash'

describe('drag and drop',()=>{
    it('double click',()=>{
cy.visit('https://www.testandquiz.com/selenium/testing.html')
//cy.get(':nth-child(1) > #dk1').dblclick()
//cift tiklama
//cy.get(':nth-child(1) > #dk1').rightclick()
//sag tiklama

cy.on('window:alert',(str)=>{
    //assert 
    //1
    expect(str).to.equal('hi, JavaTpoint Testing')
    
})
    })
})