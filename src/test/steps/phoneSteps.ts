import { Given, When, Then } from "@cucumber/cucumber";

When('o usuário insere um telefone válido ex: (51) 9999-9999 no campo {string}', async function (int, int2, int3, string) {
    return 'pending';
});

When('o usuário insere um telefone sem DDD ex: {int}-{int}', async function (int, int2) {
    // When('o usuário insere um telefone sem DDD ex: {int}-{float}', async function (int, float) {
    // When('o usuário insere um telefone sem DDD ex: {float}-{int}', async function (float, int) {
    // When('o usuário insere um telefone sem DDD ex: {float}-{float}', async function (float, float2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere um telefone com DDD ex: {int} {int}-{int}', async function (int, int2, int3) {
    // When('o usuário insere um telefone com DDD ex: {int} {int}-{float}', async function (int, int2, float) {
    // When('o usuário insere um telefone com DDD ex: {int} {float}-{int}', async function (int, float, int2) {
    // When('o usuário insere um telefone com DDD ex: {int} {float}-{float}', async function (int, float, float2) {
    // When('o usuário insere um telefone com DDD ex: {float} {int}-{int}', async function (float, int, int2) {
    // When('o usuário insere um telefone com DDD ex: {float} {int}-{float}', async function (float, int, float2) {
    // When('o usuário insere um telefone com DDD ex: {float} {float}-{int}', async function (float, float2, int) {
    // When('o usuário insere um telefone com DDD ex: {float} {float}-{float}', async function (float, float2, float3) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema aceita o telefone e o exibe como {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere um telefone com mais de5 caracteres', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere um telefone inválido ex: {int}', async function (int) {
    // When('o usuário insere um telefone inválido \\(ex: {float})', async function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema não aceita o telefone e apresenta uma mensagem de erro', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('o usuário insere um telefone com muitos caracteres', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('o sistema deve evitar ataques de Cross-Site Scripting XSS e outros tipos de ataques cibernéticos', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});