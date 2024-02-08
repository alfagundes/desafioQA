Feature: O usuário deverá testar o formulário PagBrasil validando o campo Company

  Background: 
    Given que o campo Company está presente na tela

  Scenario: Inserir nome da empresa com sucesso
    When o usuário insere o nome da empresa "ACME Corporation" no campo Company
    Then o sistema aceita o nome da empresa e o exibe corretamente

  Scenario: Exceder o limite de caracteres
    When o usuário insere um nome da empresa com mais de00 caracteres
    Then o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

  Scenario: Inserir nome da empresa com caracteres especiais
    When o usuário insere um nome da empresa com caracteres especiais ex: @#$%
    Then o sistema não aceita o nome da empresa e apresenta uma mensagem de erro

  Scenario: Deixar o campo Company vazio
    When o usuário deixa o campo Company vazio
    Then o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

  Scenario: Acessibilidade validando o campo Company
    When um usuário com deficiência visual utiliza o sistema
    Then no campo Company do sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

  Scenario: Desempenho validando o campo Company
    When o usuário insere um nome da empresa com muitos caracteres
    Then o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

  Scenario: Segurança validando o campo Company
    When o usuário tenta inserir caracteres maliciosos no campo Company
    Then o sistema deve evitar ataques de Cross-Site Scripting XSS e outros tipos de ataques cibernéticos
