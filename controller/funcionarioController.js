
import { Funcionario } from "../model/Funcionario.js";

import {
    cadastrarFuncionario as cadastrarFuncionarioRepository,
    listarFuncionarios,
    buscarFuncionarioPorIndice,
    atualizarFuncionario as atualizarFuncionarioRepository,
    excluirFuncionario as excluirFuncionarioRepository
} from "../repository/funcionarioRepository.js";

export function cadastrarFuncionario(matricula, nome, setor, cargo) {
    const funcionario = new Funcionario(matricula, nome, setor, cargo);

    cadastrarFuncionarioRepository(funcionario);

    console.log("Funcionário cadastrado com sucesso!");
}

export function listarTodosFuncionarios() {
    const funcionarios = listarFuncionarios();

    if (funcionarios.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
        return;
    }

    for (let i = 0; i < funcionarios.length; i++) {
        console.log(`Índice: ${i}`);
        console.log(`Matrícula: ${funcionarios[i].matricula}`);
        console.log(`Nome: ${funcionarios[i].nome}`);
        console.log(`Setor: ${funcionarios[i].setor}`);
        console.log(`Cargo: ${funcionarios[i].cargo}`);
        console.log(`Status: ${funcionarios[i].status}`);
        console.log("-----------------------------");
    }
}

export function buscarFuncionario(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado.");
        return;
    }

    console.log(funcionario);
    return funcionario;
}

export function atualizarFuncionario(indice, matricula, nome, setor, cargo) {
    const funcionarioExistente = buscarFuncionarioPorIndice(indice);

    if (funcionarioExistente === undefined) {
        console.log("Funcionário não encontrado.");
        return false;
    }

    const funcionarioAtualizado = new Funcionario(
        matricula,
        nome,
        setor,
        cargo
    );

    atualizarFuncionarioRepository(indice, funcionarioAtualizado);

    console.log("Funcionário atualizado com sucesso!");
    return true;
}

export function excluirFuncionario(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado.");
        return false;
    }

    excluirFuncionarioRepository(indice);

    console.log("Funcionário excluído com sucesso!");
    return true;
}

export function ativarFuncionario(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado.");
        return false;
    }

    funcionario.ativar();

    console.log("Funcionário ativado com sucesso!");
    return true;
}

export function desativarFuncionario(indice) {
    const funcionario = buscarFuncionarioPorIndice(indice);

    if (funcionario === undefined) {
        console.log("Funcionário não encontrado.");
        return false;
    }

    funcionario.desativar();

    console.log("Funcionário desativado com sucesso!");
    return true;
}
