describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      //  cy.get('#filesToUpload').attachFile('picture.jpg')

        //veya
        const path1='picture.jpg'
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('have.text','')

    })
    it('test 1',()=>{

        
    })
    it('test 1',()=>{

        
    })
})