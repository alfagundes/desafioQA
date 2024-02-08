Feature: O usuário deverá testar o formulário PagBrasil validando o campo Inquiry

  Background: 
    Given que o campo "Inquiry" está presente na tela

  Scenario: Inserir consulta com sucesso
    
    When o usuário insere uma consulta com até00 caracteres ex: "Olá, gostaria de saber mais sobre seu produto" no campo "Inquiry"
    Then o sistema aceita a consulta e retorna um JSON com "sucesso": true

  Scenario: Exceder o limite de caracteres
    When o usuário insere uma consulta com mais de00 caracteres
    Then o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres e retorna um JSON com "sucesso": false, "erro": "Campo Inquiry inválido."

  Scenario: Inserir consulta com caracteres especiais
    When o usuário insere uma consulta com caracteres especiais ex: @#$%
    Then o sistema aceita a consulta e retorna um JSON com "sucesso": true

  Scenario: Deixar o campo "Inquiry" vazio
    When o usuário deixa o campo "Inquiry" vazio
    Then o sistema apresenta uma mensagem de erro informando que o campo é obrigatório e retorna um JSON com "sucesso": false, "erro": "Campo Inquiry inválido."

  Scenario: Acessibilidade
    When um usuário com deficiência visual utiliza o sistema
    Then o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

  Scenario: Desempenho
    When o usuário insere uma consulta com muitos caracteres
    Then o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

  Scenario: Segurança
    When o usuário tenta inserir caracteres maliciosos no campo "Inquiry"
    Then o sistema deve evitar ataques de Cross-Site Scripting XSS e outros tipos de ataques cibernéticos
