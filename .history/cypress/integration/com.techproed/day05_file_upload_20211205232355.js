describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile('C:\Users\Öner\Desktop\my-cypress-framework\cypress\fixtures\picture.jpg')


    })
    it('test 1',()=>{

        
    })
    it('test 1',()=>{

        
    })
})