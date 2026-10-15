
import {
    cadastrarEpi,
    listarTodosEpis,
    buscarEpi,
    adicionarQuantidadeEpi,
    retirarQuantidadeEpi,
    atualizarEpi,
    excluirEpi
} from "./controller/epiController.js";

import {
    cadastrarFuncionario,
    listarTodosFuncionarios,
    buscarFuncionario,
    atualizarFuncionario,
    excluirFuncionario,
    ativarFuncionario,
    desativarFuncionario
} from "./controller/funcionarioController.js";

console.log("\n========== TESTES DE EPIs ==========");

console.log("\n--- 1. Cadastro de EPIs ---");

cadastrarEpi("E001", "Capacete de segurança", "12345", 10);
cadastrarEpi("E002", "Luva de proteção", "23456", 20);
cadastrarEpi("E003", "Óculos de proteção", "34567", 15);

console.log("\n--- 2. Listagem de EPIs ---");
listarTodosEpis();

console.log("\n--- 3. Buscar EPI ---");
buscarEpi(1);

console.log("\n--- 4. Adicionar quantidade ---");
adicionarQuantidadeEpi(0, 5);

console.log("\n--- 5. Retirar quantidade ---");
retirarQuantidadeEpi(1, 5);

console.log("\n--- 6. Testar retirada inválida ---");
retirarQuantidadeEpi(2, 100);

console.log("\n--- 7. Atualizar EPI ---");
atualizarEpi(1, "E004", "Luva nitrílica", "45678", 30);

console.log("\n--- 8. Excluir EPI ---");
excluirEpi(0);

console.log("\n--- 9. Listagem final de EPIs ---");
listarTodosEpis();

console.log("\n========== TESTES DE FUNCIONÁRIOS ==========");

console.log("\n--- 1. Cadastro de funcionários ---");

cadastrarFuncionario("F001", "Carlos Silva", "Manutenção", "Mecânico");
cadastrarFuncionario("F002", "Ana Souza", "Produção", "Operadora");
cadastrarFuncionario("F003", "Pedro Santos", "Qualidade", "Inspetor");

console.log("\n--- 2. Listagem de funcionários ---");
listarTodosFuncionarios();

console.log("\n--- 3. Buscar funcionário ---");
buscarFuncionario(0);

console.log("\n--- 4. Desativar funcionário ---");
desativarFuncionario(0);

console.log("\n--- 5. Verificar status após desativação ---");
buscarFuncionario(0);

console.log("\n--- 6. Ativar funcionário ---");
ativarFuncionario(0);

buscarFuncionario(0);

console.log("\n--- 7. Atualizar funcionário ---");
atualizarFuncionario(
    1,
    "F004",
    "Ana Souza",
    "Recursos Humanos",
    "Analista"
);

console.log("\n--- 8. Excluir funcionário ---");
excluirFuncionario(2);

console.log("\n--- 9. Listagem final de funcionários ---");
listarTodosFuncionarios();
