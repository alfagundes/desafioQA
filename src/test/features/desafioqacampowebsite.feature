Feature: O usuário deverá testar o formulário PagBrasil validando o campo Website

    Scenario: Inserir URL com sucesso validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário insere uma URL válida ex: https://www.google.com no campo "Website"
    Then o sistema aceita a URL e a exibe corretamente

    Scenario: Exceder o limite de caracteres validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário insere uma URL com mais de00 caracteres
    Then o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

    Scenario: Inserir URL inválida validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário insere uma URL inválida ex: <URL inválido removido>
    Then o sistema não aceita a URL e apresenta uma mensagem de erro

    Scenario: Deixar o campo "Website" vazio validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário deixa o campo "Website" vazio
    Then o sistema não apresenta mensagem de erro campo opcional

    Scenario: Inserir URL com protocolo HTTPS validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário insere uma URL com protocolo HTTPS ex: https://www.google.com
    Then o sistema aceita a URL e a exibe corretamente

    Scenario: Inserir URL com protocolo HTTP validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário insere uma URL com protocolo HTTP ex: http://www.google.com
    Then o sistema aceita a URL e a exibe corretamente

    Scenario: Acessibilidade validando o campo Website
    Given que o campo "Website" está presente na tela
    When um usuário com deficiência visual utiliza o sistema
    Then o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

    Scenario: Desempenho validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário insere uma URL com muitos caracteres
    Then o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

    Scenario: Segurança validando o campo Website
    Given que o campo "Website" está presente na tela
    When o usuário tenta inserir caracteres maliciosos no campo "Website"
    Then o sistema deve evitar ataques de Cross-Site Scripting XSS e outros tipos de ataques cibernéticos