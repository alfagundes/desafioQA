Feature: O usuário deverá testar o formulário PagBrasil validando o campo Email

Background:
Given que o campo "Email" está presente na tela

Scenario: Inserir email com sucesso
When o usuário insere um email válido ex: joaosilva@email.com
Then o sistema aceita o email e o exibe corretamente

Scenario: Exceder o limite de caracteres
When o usuário insere um email com mais de50 caracteres
Then o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

Scenario: Inserir email inválido
When o usuário insere um email inválido ex: joaosilva.email
Then o sistema não aceita o email e apresenta uma mensagem de erro

Scenario: Deixar o campo "Email" vazio
When o usuário deixa o campo "Email" vazio
Then o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

Scenario: Acessibilidade validando o campo Email
When um usuário com deficiência visual utiliza o sistema
Then o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

Scenario: Desempenho validando o campo Email
When o usuário insere um email com muitos caracteres
Then o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

Scenario: Segurança validando o campo Email
When o usuário tenta inserir caracteres maliciosos no campo "Email"
Then o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos
