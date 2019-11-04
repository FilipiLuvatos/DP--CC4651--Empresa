
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

function LED() {
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
const list = LED()
for (let i = 0; i < Estoque.length; i++) {
    list.add(Estoque2[i])
}

//let node = list.RetornaValor("C")
//list.remove(node)
//Exibe_produto(node.value)
//list.print()
//let aux_de_remocao = node.value
//remover(aux_de_remocao)


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
function more(var_codigo, var_produto, var_qtd,var_preco, var_tamanho) {//adiciona
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
}
/************************************************************************************************************/
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

console.log("1 - Estoque - Exibir")
console.log("2 - Estoque - Adicionar")
console.log("3 - Estoque - Remover")
console.log("4 - Estoque - Buscar Produto")


let opc = readlineSync.question('Digite: ');

filtra(opc)


function filtra(opc) {

    if (opc == 1) {//Exibir

        console.log(Estoque)

    } else if (opc == 2) {//Adicionar

        let var_codigo = readlineSync.question('Digite o codigo para o produto: ');
        let var_produto = readlineSync.question('Digite o nome do produto: ');
        let var_qtd = readlineSync.question('Digite a quantidade do produto: ');
        let var_preco = readlineSync.question('Digite o preco do produto: ');
        let var_tamanho = readlineSync.question('Digite o tamanho do produto: ');    
        console.log("[Produto adicionado com sucesso!]")  

        more(var_codigo, var_produto, var_qtd,var_preco, var_tamanho)

    } else if (opc == 3) {//Remover



    }else if( opc == 4){

    }else{
        console.log("Opcao Invalida!!!")
    }
}