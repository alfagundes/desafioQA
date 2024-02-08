import { Given, When, Then } from "@cucumber/cucumber";

When('o usuário insere uma consulta com até00 caracteres \\(ex: {string}) no campo {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema aceita a consulta e retorna um JSON com {string}: true', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere uma consulta com mais de00 caracteres', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema apresenta uma mensagem de erro informando o limite máximo de caracteres e retorna um JSON com {string}: false, {string}: {string}', async function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere uma consulta com caracteres especiais ex: @#$%', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema apresenta uma mensagem de erro informando que o campo é obrigatório e retorna um JSON com "sucesso": false, "erro": "Campo Inquiry inválido."', async function (string, string2, string3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere uma consulta com muitos caracteres', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema deve evitar ataques de Cross-Site Scripting \\(XSS) e outros tipos de ataques cibernéticos', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere uma consulta com até00 caracteres ex: {string} no campo {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
