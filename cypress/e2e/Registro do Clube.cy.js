describe('Desafio Técnico QA', () => {
    it('Dados do Clube', () => {

        cy.visit('https://homolognovocadastro.cpb.org.br/public/clubes-externos');
        cy.wait(1000)
        cy.get('.form-actions > .action > .btn-primary').click();
        cy.get('.modal').should('be.visible');  // Verifica se o modal apareceu



        cy.get('#cnpjClube').type('29220911000106');
        cy.get('button[title="Pesquisar CNPJ"]').click();
        cy.get('.swal2-confirm').should('be.visible').click();
        cy.get('#siglaClube').type('TE');
        cy.get('#nomeCompletoClube').type('TESTE Thiago LTDA');
        cy.get('#emailClube').type('thiqateste@gmail.com');
        cy.get('#dataFundacaoClube').type('14/02/2025');
        cy.get('#siteClube').type('www.thiageweweoclll.com.br');
        cy.get('#telefoneClube').type('(12) 99775-6000');
        cy.get('#cepClube').type('12230491');
        cy.get('#enderecoClube').type('Rua Volans');
        cy.get('#numeroClube').type('485');
        cy.get('#complementoClube').type('Casa');
        cy.get('#bairroClube').type('Jardim Satélite');
        cy.get('#estadoClube > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').type('São Paulo').click();
        cy.contains('span', 'SÃO PAULO').click();
        cy.get('#cidadeClube > .ng-select-searchable > .ng-select-container > .ng-value-container > .ng-input > input').type('São José dos Campos').click();
        cy.contains('span', 'SÃO JOSÉ DOS CAMPOS').click();


        cy.get('#cpfPresidente').type('35981502029');
        cy.get('button[title="Pesquisar CPF Presidente"]').click();
        cy.contains('button', 'OK').click();
        cy.wait(1000);
        cy.get('#nomePresidente').type('Pedross souzaaaa');
        cy.get('#emailPresidente').type('pedr12344o@gmail.com');
        cy.get('#dataNascimentoPresidente').type('25/10/1990');
        cy.get('#telefonePresidente').type('(12) 99775-1010');
        cy.get('#celularPresidente').type('(12) 99775-0920');
        cy.get('#dataInicioMandatoPresidente').type('25/12/2028');
        cy.get('#dataEleicaoPresidente').type('25/11/2025');
        cy.get('#dataTerminoMandatoPresidente').type('30/12/2031');


        cy.get('#cpfDiretor').type('29510871010');
        cy.get('button[title="Pesquisar CPF Diretor"]').click();
        cy.contains('button', 'OK').click();
        cy.wait(1000);
        cy.get('#nomeDiretor').type('Aroldinho  Souza jr');
        cy.get('#emailDiretor').type('arojr@gmail.com');
        cy.get('#dataNascimentoDiretor').type('16/11/1965');
        cy.get('#telefoneDiretor').type('(12) 99775-9999');
        cy.get('#celularDiretor').type('(12) 99775-1646');

        cy.get('#modalidade-0').check();
        cy.get('#modalidade-1').check();
        cy.get('#modalidade-2').check();
        cy.get('#modalidade-3').check();
        cy.get('#modalidade-4').check();
        cy.get('#modalidade-5').check();
        cy.get('#modalidade-6').check();
        cy.get('#modalidade-14').check();
        cy.get('#modalidade-15').check();
        cy.get('#modalidade-26').check();
        cy.get('#modalidade-27').check();


        cy.get('.card > .action > .btn-primary').click();

        cy.get('.swal2-html-container')
            .should('contain.text', 'Clube incluído com sucesso!')
            .and('be.visible');
        cy.contains('button', 'OK').click();

    })
})