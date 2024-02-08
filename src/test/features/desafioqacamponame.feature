Feature: O usuário deverá testar o formulário PagBrasil validando o campo Name

    Background:
        Given que o campo "Name" está presente na tela

    Scenario: Inserir nome com sucesso
    When o usuário insere um nome com letras, espaços e números
    Then o sistema aceita o nome e o exibe corretamente

    Scenario: Exceder o limite de caracteres
    When o usuário insere um nome com mais de 55 caracteres 
    Then o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

    Scenario: Inserir nome com caracteres especiais
    When o usuário insere um nome com caracteres especiais ex: @#$%
    Then o sistema não aceita o nome e apresenta uma mensagem de erro

    Scenario: Deixar o campo "Name" vazio
    When o usuário deixa o campo "Name" vazio 
    Then o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

    Scenario: Acessibilidade validando o campo Name
    When um usuário com deficiência visual utiliza o sistema 
    Then o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

    Scenario: Desempenho validando o campo Name
    When o usuário insere um nome com muitos caracteres 
    Then o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

    Scenario: Segurança validando o campo Name
    When o usuário tenta inserir caracteres maliciosos no campo "Name" 
    Then deve evitar ataques de Cross-Site Scripting XSS e outros tipos de ataques cibernéticos