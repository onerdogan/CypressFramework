import '@4tw/cypress-drag-drop'
import { countBy } from 'lodash'

describe('drag and drop',()=>{
    it('double click',()=>{
cy.visit('https://www.testandquiz.com/selenium/testing.html')
cy.get(':nth-child(1) > #dk1').dblclick()



    })
})