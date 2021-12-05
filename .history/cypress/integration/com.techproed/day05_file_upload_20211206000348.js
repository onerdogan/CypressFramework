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
    it.skip('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='picture.jpg'
        const path2='saat.jpg'
        const path3='saat2.jpg'

        cy.get('#filesToUpload')
        .attachFile(path1).wait(2000)
        .attachFile(path2).wait(2000)
        .attachFile(path3).wait(2000)
        
    })
    it.skip('test 1',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        //cy.get('#filesToUpload')
        //.attachFile(['picture.jpg','saat.jpg','saat2.jpg'])

        //aynisi
        const path1='picture.jpg'
        const path2='saat.jpg'
        const path3='saat2.jpg'

        cy.get('#filesToUpload')
        .attachFile([path1,path2,path3])
        
        
    })
    it('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       const path1='picture.jpg'
        cy.get('#filesToUpload').attachFile({filePath:path1,fileName:'saat1.jpeg'})
        cy.get('#fileList > li').should('have.text','saat1.jpeg')
        cy.contains('saat1.jpeg').should('be.visible')
      
       
       
        
    })
})