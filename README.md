## Roteiro de Teste - Funcionalidade de Login

**Funcionalidade:** Login de Usuário

**Descrição:**

A funcionalidade de login permite que um usuário autenticado acesse o sistema. Para isso, o usuário deve fornecer seu login (e-mail) e senha. O sistema valida as credenciais e, se forem válidas, redireciona o usuário para a página inicial.

**Pré-condições:**

* O usuário deve ter uma conta cadastrada no sistema.
* O usuário deve estar conectado à internet.

**Entradas:**

* **Login (e-mail):** Endereço de e-mail cadastrado no sistema.
* **Senha:** Senha cadastrada no sistema.

**Saídas:**

* **Sucesso:** O sistema valida as credenciais e redireciona o usuário para a página inicial.
* **Falha:** O sistema exibe uma mensagem de erro informando que as credenciais são inválidas.

**Regras de Negócio:**

* O login (e-mail) e a senha são campos obrigatórios.
* O login (e-mail) deve ser um endereço de e-mail válido.
* A senha deve ter no mínimo 8 caracteres e no máximo 16 caracteres.
* A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.
* O sistema deve permitir no máximo 3 tentativas de login. Após 3 tentativas falhas, o usuário será bloqueado por 10 minutos.

**Cenários de Teste BDD (Cucumber/Gherkin)**

### Cenários Funcionais

#### Cenário 1: Login com Sucesso

**Dado:** Um usuário com conta cadastrada no sistema.
**Quando:** O usuário informa o login (e-mail) e a senha corretos.
**Então:** O sistema valida as credenciais e redireciona o usuário para a página inicial.

#### Cenário 2: Login com Falha - E-mail Inválido

**Dado:** Um usuário com conta cadastrada no sistema.
**Quando:** O usuário informa um e-mail inválido no campo de login.
**Então:** O sistema exibe uma mensagem de erro informando que o e-mail é inválido.

#### Cenário 3: Login com Falha - Senha Inválida

**Dado:** Um usuário com conta cadastrada no sistema.
**Quando:** O usuário informa a senha incorreta no campo de senha.
**Então:** O sistema exibe uma mensagem de erro informando que a senha é inválida.

#### Cenário 4: Login com Falha - Máximo de Tentativas Excedidas

**Dado:** Um usuário com conta cadastrada no sistema.
**Quando:** O usuário informa o login (e-mail) e a senha incorretos por 3 vezes consecutivas.
**Então:** O sistema bloqueia o usuário por 10 minutos.

### Cenários Não Funcionais

#### Cenário 5: Desempenho - Tempo de Resposta

**Dado:** Um usuário com conta cadastrada no sistema.
**Quando:** O usuário informa o login (e-mail) e a senha corretos.
**Então:** O sistema valida as credenciais e redireciona o usuário para a página inicial em no máximo 5 segundos.

#### Cenário 6: Segurança - Validação de Senha

**Dado:** Um usuário com conta cadastrada no sistema.
**Quando:** O usuário informa uma senha com menos de 8 caracteres no campo de senha.
**Então:** O sistema exibe uma mensagem de erro informando que a senha deve ter no mínimo 8 caracteres.

#### Cenário 7: Usabilidade - Acessibilidade

**Dado:** Um usuário com deficiência visual.
**Quando:** O usuário tenta realizar o login utilizando um leitor de tela.
**Então:** O sistema deve ser acessível ao usuário, permitindo que ele realize o login com sucesso.

**Observações:**

* Estes são apenas alguns exemplos de cenários de teste. Outros cenários podem ser criados de acordo com as necessidades do projeto.
* Os cenários de teste devem ser escritos em linguagem natural e de fácil compreensão para todas as partes interessadas.
* As ferramentas BDD (Cucumber/Gherkin) automatizam a execução dos cenários de teste, facilitando a manutenção e o acompanhamento dos testes.

## Próximos Passos

* Criar os casos de teste específicos para cada cenário.
* Automatizar a execução dos casos de teste.
* Executar os testes e verificar os resultados.
