describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      //  cy.get('#filesToUpload').attachFile('picture.jpg')

        //veya
        const path1='picture.jpg'
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('have.text','picture.jpg')
        cy.contains('picture.jpg').should('be.visible')

    })
    it('c',()=>{

        
    })
    it('test 1',()=>{

        
    })
})