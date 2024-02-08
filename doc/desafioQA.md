# Teste BDD

## Cenários de testes dos seguintes campos;
```bash
    • “Name”, 
    • “Email”, 
    • “Company”, 
    • “Website”, 
    • “Phone”, 
    • “Inquiry”
```

### Cenário “Name”

### Funcional

#### Cenário 1: Inserir nome com sucesso
Dado que o campo "Name" está presente na tela 
Quando o usuário insere um nome com letras, espaços e números 
Então o sistema aceita o nome e o exibe corretamente

#### Cenário 2: Exceder o limite de caracteres
Dado que o campo "Name" está presente na tela 
Quando o usuário insere um nome com mais de 255 caracteres 
Então o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

#### Cenário 3: Inserir nome com caracteres especiais
Dado que o campo "Name" está presente na tela 
Quando o usuário insere um nome com caracteres especiais (ex: @#$%) 
Então o sistema não aceita o nome e apresenta uma mensagem de erro

#### Cenário 4: Deixar o campo "Name" vazio
Dado que o campo "Name" está presente na tela 
Quando o usuário deixa o campo "Name" vazio 
Então o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

#### Não Funcional

#### Cenário 5: Acessibilidade
Dado que o campo "Name" está presente na tela 
Quando um usuário com deficiência visual utiliza o sistema 
Então o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

#### Cenário 6: Desempenho
Dado que o campo "Name" está presente na tela 
Quando o usuário insere um nome com muitos caracteres 
Então o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

#### Cenário 7: Segurança
Dado que o campo "Name" está presente na tela 
Quando o usuário tenta inserir caracteres maliciosos no campo "Name" 
Então o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos
Cenário “Email”

#### Funcional

#### Cenário 1: Inserir email com sucesso
Dado que o campo "Email" está presente na tela
Quando o usuário insere um email válido (ex: joaosilva@email.com)
Então o sistema aceita o email e o exibe corretamente

#### Cenário 2: Exceder o limite de caracteres
Dado que o campo "Email" está presente na tela
Quando o usuário insere um email com mais de 150 caracteres
Então o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

#### Cenário 3: Inserir email inválido
Dado que o campo "Email" está presente na tela
Quando o usuário insere um email inválido (ex: joaosilva.email)
Então o sistema não aceita o email e apresenta uma mensagem de erro

#### Cenário 4: Deixar o campo "Email" vazio
Dado que o campo "Email" está presente na tela
Quando o usuário deixa o campo "Email" vazio
Então o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

#### Não Funcional

#### Cenário 5: Acessibilidade
Dado que o campo "Email" está presente na tela
Quando um usuário com deficiência visual utiliza o sistema
Então o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

#### Cenário 6: Desempenho
Dado que o campo "Email" está presente na tela
Quando o usuário insere um email com muitos caracteres
Então o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

#### Cenário 7: Segurança
Dado que o campo "Email" está presente na tela
Quando o usuário tenta inserir caracteres maliciosos no campo "Email"
Então o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos

#### Cenário “Company”

#### Funcional

#### Cenário 1: Inserir nome da empresa com sucesso
Dado que o campo "Company" está presente na tela
Quando o usuário insere o nome da empresa ("ACME Corporation") no campo "Company"
Então o sistema aceita o nome da empresa e o exibe corretamente

#### Cenário 2: Exceder o limite de caracteres
Dado que o campo "Company" está presente na tela
Quando o usuário insere um nome da empresa com mais de 200 caracteres
Então o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

#### Cenário 3: Inserir nome da empresa com caracteres especiais
Dado que o campo "Company" está presente na tela
Quando o usuário insere um nome da empresa com caracteres especiais (ex: @#$%)
Então o sistema não aceita o nome da empresa e apresenta uma mensagem de erro

#### Cenário 4: Deixar o campo "Company" vazio
Dado que o campo "Company" está presente na tela
Quando o usuário deixa o campo "Company" vazio
Então o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

#### Não Funcional

#### Cenário 5: Acessibilidade
Dado que o campo "Company" está presente na tela
Quando um usuário com deficiência visual utiliza o sistema
Então o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

#### Cenário 6: Desempenho
Dado que o campo "Company" está presente na tela
Quando o usuário insere um nome da empresa com muitos caracteres
Então o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

#### Cenário 7: Segurança
Dado que o campo "Company" está presente na tela
Quando o usuário tenta inserir caracteres maliciosos no campo "Company"
Então o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos

#### Cenário “Website”

#### Funcional

#### Cenário 1: Inserir URL com sucesso
Dado que o campo "Website" está presente na tela
Quando o usuário insere uma URL válida (ex: https://www.google.com) no campo "Website"
Então o sistema aceita a URL e a exibe corretamente

#### Cenário 2: Exceder o limite de caracteres
Dado que o campo "Website" está presente na tela
Quando o usuário insere uma URL com mais de 200 caracteres
Então o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

#### Cenário 3: Inserir URL inválida
Dado que o campo "Website" está presente na tela
Quando o usuário insere uma URL inválida (ex: <URL inválido removido>)
Então o sistema não aceita a URL e apresenta uma mensagem de erro

#### Cenário 4: Deixar o campo "Website" vazio
Dado que o campo "Website" está presente na tela
Quando o usuário deixa o campo "Website" vazio
Então o sistema não apresenta mensagem de erro (campo opcional)

#### Cenário 5: Inserir URL com protocolo HTTPS
Dado que o campo "Website" está presente na tela
Quando o usuário insere uma URL com protocolo HTTPS (ex: https://www.google.com)
Então o sistema aceita a URL e a exibe corretamente

#### Cenário 6: Inserir URL com protocolo HTTP
Dado que o campo "Website" está presente na tela
Quando o usuário insere uma URL com protocolo HTTP (ex: http://www.google.com)
Então o sistema aceita a URL e a exibe corretamente

#### Não Funcional

#### Cenário 7: Acessibilidade
Dado que o campo "Website" está presente na tela
Quando um usuário com deficiência visual utiliza o sistema
Então o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

#### Cenário 8: Desempenho
Dado que o campo "Website" está presente na tela
Quando o usuário insere uma URL com muitos caracteres
Então o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

#### Cenário 9: Segurança
Dado que o campo "Website" está presente na tela
Quando o usuário tenta inserir caracteres maliciosos no campo "Website"
Então o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos

#### Cenário “Phone”

#### Funcional

#### Cenário 1: Inserir telefone com sucesso
Dado que o campo "Telefone" está presente na tela
Quando o usuário insere um telefone válido (ex: (51) 9999-9999) no campo "Telefone"
Então o sistema aceita o telefone e o exibe como "(51) 9999-9999"

#### Cenário 2: Exceder o limite de caracteres
Dado que o campo "Telefone" está presente na tela
Quando o usuário insere um telefone com mais de 15 caracteres
Então o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres

#### Cenário 3: Inserir telefone inválido
Dado que o campo "Telefone" está presente na tela
Quando o usuário insere um telefone inválido (ex: 99999999)
Então o sistema não aceita o telefone e apresenta uma mensagem de erro

#### Cenário 4: Deixar o campo "Telefone" vazio
Dado que o campo "Telefone" está presente na tela
Quando o usuário deixa o campo "Telefone" vazio
Então o sistema apresenta uma mensagem de erro informando que o campo é obrigatório

#### Cenário 5: Inserir telefone com DDD
Dado que o campo "Telefone" está presente na tela
Quando o usuário insere um telefone com DDD (ex: (51) 9999-9999)
Então o sistema aceita o telefone e o exibe como "(51) 9999-9999"

#### Cenário 6: Inserir telefone sem DDD
Dado que o campo "Telefone" está presente na tela
Quando o usuário insere um telefone sem DDD (ex: 9999-9999)
Então o sistema aceita o telefone e o exibe como "(xx) 9999-9999"

#### Não Funcional

#### Cenário 7: Acessibilidade
Dado que o campo "Telefone" está presente na tela
Quando um usuário com deficiência visual utiliza o sistema
Então o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

#### Cenário 8: Desempenho
Dado que o campo "Telefone" está presente na tela
Quando o usuário insere um telefone com muitos caracteres
Então o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

#### Cenário 9: Segurança
Dado que o campo "Telefone" está presente na tela
Quando o usuário tenta inserir caracteres maliciosos no campo "Telefone"
Então o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos

#### Cenário “Inquiry”

#### Funcional

#### Cenário 1: Inserir consulta com sucesso
Dado que o campo "Inquiry" está presente na tela
Quando o usuário insere uma consulta com até 500 caracteres (ex: "Olá, gostaria de saber mais sobre seu produto") no campo "Inquiry"
Então o sistema aceita a consulta e retorna um JSON com "sucesso": true

#### Cenário 2: Exceder o limite de caracteres
Dado que o campo "Inquiry" está presente na tela
Quando o usuário insere uma consulta com mais de 500 caracteres
Então o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres e retorna um JSON com "sucesso": false, "erro": "Campo Inquiry inválido."

#### Cenário 3: Inserir consulta com caracteres especiais
Dado que o campo "Inquiry" está presente na tela
Quando o usuário insere uma consulta com caracteres especiais (ex: @#$%)
Então o sistema aceita a consulta e retorna um JSON com "sucesso": true

#### Cenário 4: Deixar o campo "Inquiry" vazio
Dado que o campo "Inquiry" está presente na tela
Quando o usuário deixa o campo "Inquiry" vazio
Então o sistema apresenta uma mensagem de erro informando que o campo é obrigatório e retorna um JSON com "sucesso": false, "erro": "Campo Inquiry inválido."

#### Não Funcional

#### Cenário 5: Acessibilidade
Dado que o campo "Inquiry" está presente na tela
Quando um usuário com deficiência visual utiliza o sistema
Então o sistema deve ser acessível por meio de tecnologias assistivas, como leitores de tela

#### Cenário 6: Desempenho
Dado que o campo "Inquiry" está presente na tela
Quando o usuário insere uma consulta com muitos caracteres
Então o sistema deve responder de forma rápida e eficiente, sem apresentar travamentos ou lentidão

#### Cenário 7: Segurança
Dado que o campo "Inquiry" está presente na tela
Quando o usuário tenta inserir caracteres maliciosos no campo "Inquiry"
Então o sistema deve evitar ataques de Cross-Site Scripting (XSS) e outros tipos de ataques cibernéticos