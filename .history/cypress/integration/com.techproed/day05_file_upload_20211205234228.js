describe('file upload',()=>{

    it.skip('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      //  cy.get('#filesToUpload').attachFile('picture.jpg')

        //veya
        const path1='picture.jpg'
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('have.text','picture.jpg')
        cy.contains('picture.jpg').should('be.visible')

    })
    it('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='picture.jpg'
        const path2='saat.jpg'
        const path3='saat2.jpg'

        cy.get('#filesToUpload').attachFile(path1).attachFile(path2).a
        
    })
    it('test 1',()=>{

        
    })
})