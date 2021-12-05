describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      //  cy.get('#filesToUpload').attachFile('picture.jpg')

        //veya
        const path1='picture.jpg'
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('have.text','picture.jpg')
        cy.co('#fileList > li').should('be.visible')

    })
    it('test 1',()=>{

        
    })
    it('test 1',()=>{

        
    })
})