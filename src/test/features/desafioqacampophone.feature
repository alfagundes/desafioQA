Feature: O usuário deverá testar o formulário PagBrasil validando o campo Phone

  Background: 
    Given que o campo "Telefone" está presente na tela

  Scenario: Inserir telefone com sucesso
    When o usuário insere um telefone válido ex: 51 9999-9999 no campo "Telefone"
    Then o sistema aceita o telefone e o exibe como "(51) 9999-9999"

  Scenario: Exceder o limite de caracteres
    Given que o campo "Telefone" está presente na tela
    When o usuário insere um telefone com mais de5 caracteres
    Then o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

  Scenario: Inserir telefone inválido
    Given que o campo "Telefone" está presente na tela
    When o usuário insere um telefone inválido ex: 99999999
    Then o sistema não aceita o telefone e apresenta uma mensagem de erro

  Scenario: Deixar o campo "Telefone" vazio
    Given que o campo "Telefone" está presente na tela
    When o usuário deixa o campo "Telefone" vazio
    Then o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

  Scenario: Inserir telefone com DDD
    Given que o campo "Telefone" está presente na tela
    When o usuário insere um telefone com DDD ex: 51 9999-9999
    Then o sistema aceita o telefone e o exibe como "(51) 9999-9999"

  Scenario: Inserir telefone sem DDD
    Given que o campo "Telefone" está presente na tela
    When o usuário insere um telefone sem DDD ex: 9999-9999
    Then o sistema aceita o telefone e o exibe como "xx 9999-9999"

  Scenario: Acessibilidade validando o campo Phone
    Given que o campo "Telefone" está presente na tela
    When um usuário com deficiência visual utiliza o sistema
    Then o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

  Scenario: Desempenho validando o campo Phone
    Given que o campo "Telefone" está presente na tela
    When o usuário insere um telefone com muitos caracteres
    Then o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

  Scenario: Segurança validando o campo Phone
    Given que o campo "Telefone" está presente na tela
    When o usuário tenta inserir caracteres maliciosos no campo "Telefone"
    Then o sistema deve evitar ataques de Cross-Site Scripting XSS e outros tipos de ataques cibernéticos
