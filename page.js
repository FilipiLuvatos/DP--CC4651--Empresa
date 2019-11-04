
const xlsx = require('xlsx')
const fs = require('fs')
var readlineSync = require('readline-sync');

var Estoque = []
var Estoque2 = []
var Estoque3 = []

var nome = './Estoque.xlsx'
var fr = xlsx.readFile(nome);
var aux = fr.Sheets['Plan1'];
var range = xlsx.utils.decode_range(aux['!ref']);
range.s.r = 0;
aux['!ref'] = xlsx.utils.encode_range(range);
var arrayEstoque = xlsx.utils.sheet_to_json(aux, { header: ["CodigoP", "Produto", "Qtd", "Preco", "Tamanho"], defval: true });

for (i = 1; i < arrayEstoque.length; i++) {
    let push = arrayEstoque[i];
    let push2 = arrayEstoque[i].CodigoP
    Estoque.push(push)// Estoque Original
    Estoque2.push(push2) // Estoque Aux Number
}

function LDE() {
    let head = null
    let tail = null
    let length = 0
    const Node = (value) => {
        return {
            value,
            next: null
        }
    }
    const add = (value) => {
        if (!head) {
            head = Node(value)
            tail = head
            length++
            return head
        }
        let node = Node(value)
        tail.next = node
        tail = node
        return node
    }
    const RetornaValor = (value) => {
        let node = head
        if (length == 0) {
            return null
        } else if (node.value == value) {
            return node// .value retornara o valor e apenas node retornara o nó em si
        }
        while (node.next) {
            node = node.next
            if (node.value == value) {
                return node
            }
        }
        return null
    }
    const remove = (node) => {
        if (length == 0) return false//lista vazia
        else if (node == head) {//retira o primeiro
            head = node.next
            return true
        }
        let currentNode = head
        while (currentNode.next && currentNode.next != node) {
            currentNode = currentNode.next
        }
        currentNode.next = node.next
        return true
    }
    return {
        length: () => length,
        add: (value) => add(value),
        print: () => console.log(head),
        remove: (node) => remove(node),
        RetornaValor: (value) => RetornaValor(value)
    }
}
const list = LDE()
for (let i = 0; i < Estoque.length; i++) {
    list.add(Estoque2[i])
}

function aux_remo(codigo_produto) {

    let node = list.RetornaValor(codigo_produto)
    list.remove(node)
    let aux_de_remocao = node.value
    remover(aux_de_remocao)


}


function Exibe_produto(exibe) {
    let i = 0
    let produto_encontrado
    for (let i = 0; i < Estoque.length; i++) {
        if (Estoque2[i] == exibe) {
            produto_encontrado = i

        }
    }
    console.log(Estoque[produto_encontrado])
}
function more(var_codigo, var_produto, var_qtd, var_preco, var_tamanho) {//adiciona
    var adicionando = {
        CodigoP: var_codigo,
        Produto: var_produto,
        Qtd: var_qtd,
        Preco: var_preco,
        Tamanho: var_tamanho
    }
    Estoque.push(adicionando)
    var ws_export = xlsx.utils.json_to_sheet(Estoque)
    var wb_export = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb_export, ws_export, 'Plan1')
    xlsx.writeFile(wb_export, './Estoque.xlsx')
}
function remover(aux_de_remocao) {
    let i = 0
    while (Estoque2[i] != aux_de_remocao) {
        i++
    }
    let auxiliar_de_remocao = i
    let removido = Estoque2[auxiliar_de_remocao]
    for (let i = 0; i < Estoque.length; i++) {
        if (Estoque2[i] != removido) {
            Estoque3.push(Estoque[i])
        }
    }
    var ws_export = xlsx.utils.json_to_sheet(Estoque3)
    var wb_export = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb_export, ws_export, 'Plan1')
    xlsx.writeFile(wb_export, './Estoque.xlsx')

    console.log("[Removido com sucesso!]")
}
/************************************************************************************************************/

var Clientes = []
var Clientes2 = []
var Clientes3 = []

var nome = './Clientes.xlsx'
var fr = xlsx.readFile(nome);
var aux = fr.Sheets['Plan1'];
var range = xlsx.utils.decode_range(aux['!ref']);
range.s.r = 0;
aux['!ref'] = xlsx.utils.encode_range(range);
var arrayEstoque = xlsx.utils.sheet_to_json(aux, { header: ["Codigo", "Nome", "Sobrenome", "Idade", "Sexo", "Endereco", "Numero", "Cidade"], defval: true });

for (i = 1; i < arrayEstoque.length; i++) {
    let push = arrayEstoque[i];
    let push2 = arrayEstoque[i].CodigoP
    Clientes.push(push)// Estoque Original
    Clientes2.push(push2) // Estoque Aux Number
}

function LDDE() {
    let head = null
    let tail = null
    let length = 0
    const Node = (value) => {
        return {
            value,
            next: null
        }
    }
    const add = (value) => {
        if (!head) {
            head = Node(value)
            tail = head
            length++
            return head
        }
        let node = Node(value)
        tail.next = node
        tail = node
        return node
    }
    const RetornaValor = (value) => {
        let node = head
        if (length == 0) {
            return null
        } else if (node.value == value) {
            return node// .value retornara o valor e apenas node retornara o nó em si
        }
        while (node.next) {
            node = node.next
            if (node.value == value) {
                return node
            }
        }
        return null
    }
    const remove = (node) => {
        if (length == 0) return false//lista vazia
        else if (node == head) {//retira o primeiro
            head = node.next
            return true
        }
        let currentNode = head
        while (currentNode.next && currentNode.next != node) {
            currentNode = currentNode.next
        }
        currentNode.next = node.next
        return true
    }
    return {
        length: () => length,
        add: (value) => add(value),
        print: () => console.log(head),
        remove: (node) => remove(node),
        RetornaValor: (value) => RetornaValor(value)
    }
}
const list2 = LDDE()
for (let i = 0; i < Clientes.length; i++) {
    list2.add(Clientes2[i])
}

function aux_remo_cli(codigo_produto) {

    let node = list2.RetornaValor(codigo_produto)
    list2.remove(node)
    let aux_de_remocao = node.value
    removerCli(aux_de_remocao)


}


function Exibe_Cli(exibe) {
    let i = 0
    let produto_encontrado
    for (let i = 0; i < Clientes.length; i++) {
        if (Clientes2[i] == exibe) {
            produto_encontrado = i

        }
    }
    console.log(Clientes[produto_encontrado])
}
function moreCli(var_codigo, var_nome, var_sob, var_idade, var_sexo, var_end, var_number, var_city) {//adiciona
    var adicionando = {
        Codigo: var_codigo,
        Nome: var_nome,
        Sobrenome: var_sob,
        Idade: var_idade,
        Sexo: var_sexo,
        Endereco: var_end,
        Numero: var_number,
        Cidade: var_city
    }
    Clientes.push(adicionando)
    var ws_export = xlsx.utils.json_to_sheet(Clientes)
    var wb_export = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb_export, ws_export, 'Plan1')
    xlsx.writeFile(wb_export, './Clientes.xlsx')
}
function removerCli(aux_de_remocao) {
    let i = 0
    while (Clientes2[i] != aux_de_remocao) {
        i++
    }
    let auxiliar_de_remocao = i
    let removido = Clientes2[auxiliar_de_remocao]
    for (let i = 0; i < Clientes.length; i++) {
        if (Clientes2[i] != removido) {
            Clientes3.push(Clientes[i])
        }
    }
    var ws_export = xlsx.utils.json_to_sheet(Clientes3)
    var wb_export = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb_export, ws_export, 'Plan1')
    xlsx.writeFile(wb_export, './Clientes.xlsx')

    console.log("[Removido com sucesso!]")
}

/************************************************************************************************************** */
const Pilha = () => {//Verificador
    const data = []
    let topo = -1
    const push = (value) => {
        topo++
        data[topo] = value
    }
    const pop = () => {
        if (topo < 0) {
            return false
        } else {
            const itemRe = data[topo]
            data.splice(topo, 1)
            topo--
            return itemRe
        }
    }
    const print = () => console.log(data)
    return {
        push, pop, print
    }
}
const stack = Pilha()
//stack.push(1)
//stack.push(2)
//stack.push(3)
//stack.pop()
//stack.print()
/************************************************************************************************************/
const Fila = () => {//Pedidos
    const data = []
    const add = (value) => {
        data.unshift(value)
    }
    const remove = () => {
        if (data.length == 0) {
            return -1
        }
        const value = data[data.length - 1]
        data.splice(data.length - 1, 1)
        return value
    }
    const print = () => console.log(data)
    return {
        add,
        remove,
        print
    }
}
const fila2 = Fila()
//fila2.add(1)
//fila2.add(2)
//fila2.add(3)
//fila2.add(4)
//fila2.print()
//fila2.remove()
//fila2.print()
/************************************************************************************************************/
const arvore = {}//Clientes
function insert(tree, value) {
    if (tree.value) {
        if (value > tree.value) {
            insert(tree.rigth, value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.rigth = {}
        tree.left = {}
    }
}
insert(arvore, 10)
insert(arvore, 11)
insert(arvore, 9)
//console.log(arvore)
function search(tree, value) {
    if (!tree.value || tree.value == value) {
        return tree.value
    }
    else if (value < tree.value) {
        return search(tree.left, value)
    }
    return search(tree.rigth, value)
}
//console.log(search( arvore, 14))
/************************************************************************************************************/


console.log("Menu")
console.log("Digite as Opcoes desejadas")

console.log("1 - Estoque ")
console.log("2 - Clientes")
console.log("3 - Vendas")
console.log("4 - Entregas")

let opc = readlineSync.question('Digite: ');

filtra(opc)

function filtra(opc) {

    if (opc == 1) {//Estoque       

        console.log("1 - Estoque - Exibir")
        console.log("2 - Estoque - Adicionar")
        console.log("3 - Estoque - Remover")
        console.log("4 - Estoque - Buscar Produto")

        let opc1 = readlineSync.question('Digite: ');

        filtra1(opc1)

    } else if (opc == 2) {//Clientes

        console.log("1 - Clientes - Exibir")
        console.log("2 - Clientes - Adicionar")
        console.log("3 - Clientes - Remover")
        console.log("4 - Clientes - Buscar Cliente")

        let opc2 = readlineSync.question('Digite: ');
 
        filtra2(opc2)

    } else if (opc == 3) {//Vendas       

        // filtra3(opc3)


    } else if (opc == 4) {//Entregas   

        // filtra4(opc4)

    } else {
        console.log("Opcao Invalida!!!")
    }


 


}

function filtra1(opc1) {//Estoque

    if (opc == 1) {//Exibir

        console.log(Estoque)

    } else if (opc1 == 2) {//Adicionar

        let var_codigo = readlineSync.question('Digite um codigo para o produto: ');
        let var_produto = readlineSync.question('Digite o nome do produto: ');
        let var_qtd = readlineSync.question('Digite a quantidade do produto: ');
        let var_preco = readlineSync.question('Digite o preco do produto: ');
        let var_tamanho = readlineSync.question('Digite o tamanho do produto: ');
        console.log("[Produto adicionado com sucesso!]")

        more(var_codigo, var_produto, var_qtd, var_preco, var_tamanho)

    } else if (opc1 == 3) {//Remover


        let codigo_produto_remover = readlineSync.question('Digite o codigo do produto que deseja remover: ');
        aux_remo(codigo_produto_remover)

    } else if (opc1 == 4) {

        let codigo_produto_buscar = readlineSync.question('Digite o codigo do produto que deseja Buscar: ');
        Exibe_produto(codigo_produto_buscar)

    } else {
        console.log("Opcao Invalida!!!")
    }
}

function filtra2(opc2) {//Clientes



    if (opc2 == 1) {//Exibir

        console.log(Clientes)



    } else if (opc2 == 2) {//Adicionar
        
        let var_codigo = readlineSync.question('Digite um coidgo para o Cliente: ');
        let var_nome = readlineSync.question('Digite o nome do CLiente: ');
        let var_sob = readlineSync.question('Digite o sobrenome do Cliente: ');
        let var_idade = readlineSync.question('Digite a Idade: ');
        let var_sexo = readlineSync.question('Digite o Sexo: ');
        let var_end = readlineSync.question('Digite o Endereco: ');
        let var_number = readlineSync.question('Digite o numero: ');
        let var_city = readlineSync.question('Digite a cidade: ');

        moreCli(var_codigo, var_nome, var_sob, var_idade, var_sexo, var_end, var_number, var_city)
        console.log("[Adicionado com sucesso!]")


    } else if (opc2 == 3) {//Remover



        let codigo_cliente_remover = readlineSync.question('Digite o codigo do cliente que deseja remover: ');
        aux_remo_cli(codigo_cliente_remover)


    } else if (opc2 == 4) {

        let codigo_cliente_buscar = readlineSync.question('Digite o codigo do produto que deseja Buscar: ');
        Exibe_Cli(codigo_cliente_buscar)



    } else {
        console.log("Opcao Invalida!!!")
    }


}