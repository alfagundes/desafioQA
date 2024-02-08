describe('Testes para os campos "Name", "Email", "Company", "Website", "Phone", "Inquiry"', () => {

  //Validando campo Name
  it('CT01 - Validar se o campo "Name" está presente na tela', () => {
    cy.visit('/'); // Acesse a página inicial
    cy.get('#Name').should('be.visible'); // Valida se o campo está presente
  });

  it('CT02 - Validar se o campo "Name" aceita apenas letras, espaços e números', () => {
    cy.visit('/');
    cy.get('#Name').type('Nome Completo123'); // Digite um nome válido
    cy.get('#Name').should('have.value', 'Nome Completo123'); // Valida se o valor foi digitado
    cy.get('#Name').clear().type('Nome!@#$%');// Tente digitar caracteres especiais
    cy.get('#Name').should('have.value', 'Nome'); // Valida se apenas letras, espaços e números foram aceitos
  });

  it('CT03 - Validar se o campo "Name" aceita no máximo 255 caracteres', () => {
    cy.visit('/');
    const longName = 'a'.repeat(256); // Crie uma string com 256 caracteres
    cy.get('#Name').type(longName);
    cy.get('#Name').should('have.value', longName.substring(0, 255)); // Valida se apenas 255 caracteres foram aceitos
  });

  it('CT04 - Validar se o campo "Name" é obrigatório', () => {
    cy.visit('/');
    cy.get('#Name').clear(); // Limpe o campo
    cy.get('#Name').should('have.class', 'error'); // Valida se o campo está com a classe de erro
  });

  //Validando campo Email
  it('CT05 - Validar se o campo "Email" está presente na tela', () => {
    cy.visit('/'); // Acesse a página inicial
    cy.get('#Email').should('be.visible'); // Valida se o campo está presente
  });

  it('CT06 - Validar se o campo "Email" aceita apenas letras, números, arroba (@) e ponto (.)', () => {
    cy.visit('/');
    cy.get('#Email').type('usuario@exemplo.com'); // Digite um email válido
    cy.get('#Email').should('have.value', 'usuario@exemplo.com'); // Valida se o valor foi digitado
    cy.get('#Email').clear().type('usuario!@#$%');// Tente digitar caracteres especiais
    cy.get('#Email').should('have.value', 'usuario'); // Valida se apenas letras, números, arroba e ponto foram aceitos
  });

  it('CT07 - Validar se o campo "Email" aceita no máximo 150 caracteres', () => {
    cy.visit('/');
    const longEmail = 'a'.repeat(151) + '@exemplo.com'; // Crie um email com 151 caracteres
    cy.get('#Email').type(longEmail);
    cy.get('#Email').should('have.value', longEmail.substring(0, 150)); // Valida se apenas 150 caracteres foram aceitos
  });

  it('CT08 - Validar se o campo "Email" é obrigatório', () => {
    cy.visit('/');
    cy.get('#Email').clear(); // Limpe o campo
    cy.get('#Email').should('have.class', 'error'); // Valida se o campo está com a classe de erro
  });

  it('CT09 - Validar se o campo "Email" formata o texto digitado como um endereço de e-mail', () => {
    cy.visit('/');
    cy.get('#Email').type('usuario@exemplo.com');
    cy.get('#Email').should('have.attr', 'type', 'email'); // Valida se o tipo do campo é "email"
  });

  //Validando campo Company
  it('CT10 - Validar se o campo "Company" está presente na tela', () => {
    cy.visit('/'); // Acesse a página inicial
    cy.get('#Company').should('be.visible'); // Valida se o campo está presente
  });

  it('CT11 - Validar se o campo "Company" aceita apenas letras, espaços e números', () => {
    cy.visit('/');
    cy.get('#Company').type('Nome da Empresa123'); // Digite um nome válido
    cy.get('#Company').should('have.value', 'Nome da Empresa123'); // Valida se o valor foi digitado
    cy.get('#Company').clear().type('Nome da Empresa!@#$%');// Tente digitar caracteres especiais
    cy.get('#Company').should('have.value', 'Nome da Empresa'); // Valida se apenas letras, espaços e números foram aceitos
  });

  it('CT12 - Validar se o campo "Company" aceita no máximo 200 caracteres', () => {
    cy.visit('/');
    const longCompany = 'a'.repeat(201); // Crie uma string com 201 caracteres
    cy.get('#Company').type(longCompany);
    cy.get('#Company').should('have.value', longCompany.substring(0, 200)); // Valida se apenas 200 caracteres foram aceitos
  });

  it('CT13 - Validar se o campo "Company" é obrigatório', () => {
    cy.visit('/');
    cy.get('#Company').clear(); // Limpe o campo
    cy.get('#Company').should('have.class', 'error'); // Valida se o campo está com a classe de erro
  });

  //validando campo Website
  it('CT14 - Validar se o campo "Website" está presente na tela', () => {
    cy.visit('/'); // Acesse a página inicial
    cy.get('#Website').should('be.visible'); // Valida se o campo está presente
  });

  it('CT15 - Validar se o campo "Website" aceita apenas letras, números, dois pontos (:), barra (/) e ponto (.)', () => {
    cy.visit('/');
    cy.get('#Website').type('https://www.exemplo.com'); // Digite um website válido
    cy.get('#Website').should('have.value', 'https://www.exemplo.com'); // Valida se o valor foi digitado
    cy.get('#Website').clear().type('https://www.exemplo!@#$%.com');// Tente digitar caracteres especiais
    cy.get('#Website').should('have.value', 'https://www.exemplo'); // Valida se apenas letras, números, :, / e . foram aceitos
  });

  it('CT16 - Validar se o campo "Website" aceita no máximo 200 caracteres', () => {
    cy.visit('/');
    const longWebsite = 'a'.repeat(201) + '.com'; // Crie uma URL com 201 caracteres
    cy.get('#Website').type(longWebsite);
    cy.get('#Website').should('have.value', longWebsite.substring(0, 200)); // Valida se apenas 200 caracteres foram aceitos
  });

  it('CT17 - Validar se o campo "Website" é obrigatório', () => {
    cy.visit('/');
    cy.get('#Website').clear(); // Limpe o campo
    cy.get('#Website').should('have.class', 'error'); // Valida se o campo está com a classe de erro
  });

  it('CT18 - Validar se o campo "Website" formata o texto digitado como uma URL válida', () => {
    cy.visit('/');
    cy.get('#Website').type('https://www.exemplo.com');
    cy.get('#Website').should('have.attr', 'type', 'url'); // Valida se o tipo do campo é "url"
  });

});

//Validando campo Phone
it('CT19 - Validar se o campo "Phone" está presente na tela', () => {
  cy.visit('/'); // Acesse a página inicial
  cy.get('#Phone').should('be.visible'); // Valida se o campo está presente
});

it('CT20 - Validar se o campo "Phone" aceita apenas números, parênteses e hífen (-)', () => {
  cy.visit('/');
  cy.get('#Phone').type('(51) 9999-9999'); // Digite um telefone válido
  cy.get('#Phone').should('have.value', '(51) 9999-9999'); // Valida se o valor foi digitado 
  cy.get('#Phone').clear().type('(51) !@#$%');// Tente digitar caracteres especiais
  cy.get('#Phone').should('have.value', '(51)'); // Valida se apenas números, parênteses e hífen foram aceitos
});

it('CT21 - Validar se o campo "Phone" é formatado automaticamente com máscara "(xx) xxxxx-xxxx"', () => {
  cy.visit('/');
  cy.get('#Phone').type('5199999999'); // Digite apenas os números do telefone
  cy.get('#Phone').should('have.value', '(51) 9999-9999'); // Valida se o telefone foi formatado automaticamente
});

it('CT22 - Validar se o campo "Phone" aceita no máximo 15 caracteres', () => {
  cy.visit('/');
  const longPhone = '1'.repeat(16); // Crie um número de telefone com 16 caracteres
  cy.get('#Phone').type(longPhone);
  cy.get('#Phone').should('have.value', longPhone.substring(0, 15)); // Valida se apenas 15 caracteres foram aceitos
});

it('CT23 - Validar se o campo "Phone" é obrigatório', () => {
  cy.visit('/');
  cy.get('#Phone').clear(); // Limpe o campo
  cy.get('#Phone').should('have.class', 'error'); // Valida se o campo está com a classe de erro
});

//Validando campo Inquiry
it('CT24 - Validar se o campo "Inquiry" está presente na tela', () => {
  cy.visit('/'); // Acesse a página inicial
  cy.get('#Inquiry').should('be.visible'); // Valida se o campo está presente
});

it('CT25 - Validar se o campo "Inquiry" aceita apenas letras, espaços e números', () => {
  cy.visit('/');
  cy.get('#Inquiry').type('Sua consulta aqui'); // Digite uma consulta válida
  cy.get('#Inquiry').should('have.value', 'Sua consulta aqui'); // Valida se o valor foi digitado
  cy.get('#Inquiry').clear().type('Sua consulta!@#<span class="math-inline">%');// Tente digitar caracteres especiais
  cy.get('#Inquiry').should('have.value', 'Sua consulta'); // Valida se apenas letras, espaços e números foram aceitos
});

it('CT26 - Validar se o campo "Inquiry" aceita no máximo 500 caracteres', () => {
  cy.visit('/');
  const longInquiry = 'a'.repeat(501); // Crie uma consulta com 501 caracteres
  cy.get('#Inquiry').type(longInquiry);
  cy.get('#Inquiry').should('have.value', longInquiry.substring(0, 500)); // Valida se apenas 500 caracteres foram aceitos
});

it('CT27 - Validar se o campo "Inquiry" é obrigatório', () => {
  cy.visit('/');
  cy.get('#Inquiry').clear(); // Limpe o campo
  cy.get('#Inquiry').should('have.class', 'error'); // Valida se o campo está com a classe de erro
});

it('CT28 - Validar se o campo "Inquiry" é gravado no banco de dados corretamente', () => {  
  cy.request('POST', '/api/users', { inquiry: 'Sua consulta aqui' }).then((response) => {// Envie uma requisição para a API com uma consulta válida
    expect(response.body.inquiry).to.equal('Sua consulta aqui');// Valida se a consulta foi gravada corretamente no banco de dados
  });
});

it('CT29 - Validar se o campo "Inquiry" não aceita caracteres especiais no backend', () => {
  cy.request('POST', '/api/users', { inquiry: 'Sua consulta!@#</span>%' }).then((response) => {// Envie uma requisição para a API com uma consulta com caracteres especiais
    expect(response.status).to.equal(412);// Valida se a API retornou um erro
    expect(response.body.erro).to.equal('Campo Inquiry inválido.');
  });
});