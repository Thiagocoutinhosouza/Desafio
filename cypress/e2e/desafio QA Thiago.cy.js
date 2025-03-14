describe('Desafio Técnico QA', () => {
  it('Acessar o Link', () => {
    cy.visit('https://homologcadastro.cpb.org.br/cadastro-geral-web/')

    cy.contains('button', 'Registrar Clube').click();



    cy.visit('https://homolognovocadastro.cpb.org.br/public/clubes-externos');

    cy.wait(1000)
    cy.get('.form-actions > .action > .btn-primary').click();
    cy.get('.modal').should('be.visible');  // Verifica se o modal apareceu
   

  })
})