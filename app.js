
import {
    cadastrarEpi,
    listarTodosEpis,
    buscarEpi,
    adicionarQuantidadeEpi,
    retirarQuantidadeEpi,
    atualizarEpi,
    excluirEpi
} from "./controller/epiController.js";

console.log("\n===== 1. CADASTRO DE EPIs =====");

cadastrarEpi("E001", "Capacete de segurança", "12345", 10);
cadastrarEpi("E002", "Luva de proteção", "23456", 20);
cadastrarEpi("E003", "Óculos de proteção", "34567", 15);

console.log("\n===== 2. LISTAR TODOS OS EPIs =====");

listarTodosEpis();

console.log("\n===== 3. BUSCAR EPI =====");

buscarEpi(1);

console.log("\n===== 4. ADICIONAR QUANTIDADE =====");

adicionarQuantidadeEpi(0, 5);

console.log("\n===== 5. RETIRAR QUANTIDADE =====");

retirarQuantidadeEpi(1, 5);

console.log("\n===== 6. TESTAR RETIRADA INVÁLIDA =====");

retirarQuantidadeEpi(2, 100);

console.log("\n===== 7. ATUALIZAR EPI =====");

atualizarEpi(1, "E004", "Luva nitrílica", "45678", 30);

console.log("\n===== 8. EXCLUIR EPI =====");

excluirEpi(0);

console.log("\n===== 9. LISTAGEM FINAL =====");

listarTodosEpis();
