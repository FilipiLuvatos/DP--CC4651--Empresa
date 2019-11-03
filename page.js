console.log("Menu")
console.log("Digite as Opcoes desejadas")

console.log("1 - Estoque - Exibir")
console.log("2 - Estoque - Adicionar")
console.log("3 - Estoque - Remover")


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});





const xlsx = require('xlsx')
const fs = require('fs')
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
//console.log(Estoque)
function LED() {//Estoque
    let head = null//Primeiro nó
    let tail = null//Fim da Lista
    let length = 0
    const Node = (value) => {//nó
        return {
            value,
            next: null
        }
    }
    const add = (value) => {
        if (!head) {//Se o primeiro nó não for verdadeiro, vamos passar 
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
//list.print()
let node = list.RetornaValor("C")
list.remove(node)
Exibe_produto(node.value)
//list.print()
let aux_de_remocao = node.value
remover(aux_de_remocao)
//let aux_de_remocao2 = Estoque2.search(aux_de_remocao)
var_codigo = "Z"//inner html
var_produto = "Moto"
var_qtd = "100"
var_preco = "10,00"
var_tamanho = " MS"
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
function more() {//adiciona
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
console.log(arvore)
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
function Verificar() {// Pode se tornar "Busca"
    aux_ver = document.getElementById('verText').value
    document.getElementById('imprime').value = aux_ver;
}

