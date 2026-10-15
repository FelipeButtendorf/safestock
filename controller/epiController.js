
import { Epi } from "../model/Epi.js";

import {
    cadastrarEpi as cadastrarEpiRepository,
    listarEpis,
    buscarEpiPorIndice,
    atualizarEpi as atualizarEpiRepository,
    excluirEpi as excluirEpiRepository
} from "../repository/epiRepository.js";

export function cadastrarEpi(codigo, nome, ca, quantidade) {
    const epi = new Epi(codigo, nome, ca, quantidade);

    cadastrarEpiRepository(epi);

    console.log("EPI cadastrado com sucesso!");
}

export function listarTodosEpis() {
    const epis = listarEpis();

    if (epis.length === 0) {
        console.log("Nenhum EPI cadastrado.");
        return;
    }

    for (let i = 0; i < epis.length; i++) {
        console.log(`Índice: ${i}`);
        console.log(`Código: ${epis[i].codigo}`);
        console.log(`Nome: ${epis[i].nome}`);
        console.log(`CA: ${epis[i].ca}`);
        console.log(`Quantidade: ${epis[i].quantidade}`);
        console.log("-------------------------");
    }
}

export function buscarEpi(indice) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado.");
        return;
    }

    console.log(epi);
    return epi;
}

export function atualizarEpi(indice, codigo, nome, ca, quantidade) {
    const epiExistente = buscarEpiPorIndice(indice);

    if (epiExistente === undefined) {
        console.log("EPI não encontrado.");
        return false;
    }

    const epiAtualizado = new Epi(codigo, nome, ca, quantidade);

    atualizarEpiRepository(indice, epiAtualizado);

    console.log("EPI atualizado com sucesso!");
    return true;
}

export function excluirEpi(indice) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado.");
        return false;
    }

    excluirEpiRepository(indice);

    console.log("EPI excluído com sucesso!");
    return true;
}

export function adicionarQuantidadeEpi(indice, valor) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado.");
        return false;
    }

    const resultado = epi.adicionarQuantidade(valor);

    if (!resultado) {
        console.log("Quantidade inválida.");
        return false;
    }

    console.log("Quantidade adicionada com sucesso!");
    return true;
}

export function retirarQuantidadeEpi(indice, valor) {
    const epi = buscarEpiPorIndice(indice);

    if (epi === undefined) {
        console.log("EPI não encontrado.");
        return false;
    }

    const resultado = epi.retirarQuantidade(valor);

    if (!resultado) {
        console.log("Não foi possível retirar a quantidade informada.");
        return false;
    }

    console.log("Quantidade retirada com sucesso!");
    return true;
}
