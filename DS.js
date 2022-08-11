function Queue() {
    this._arr = [];
}

Queue.prototype.enqueue = function(val) {

}

Queue.prototype.dequeue = function() {

}

Queue.prototype.size = function() {

}

function LinkedList() {

}

function Node(value){

}

LinkedList.prototype.add = function(value) {

}

LinkedList.prototype.remove = function(value) {

}

LinkedList.prototype.search = function(check) {

}

LinkedList.prototype.filter = function(check) {
    // Declaro un puntero que apunta al head
}

function BinarySearchTree(value) {

};

BinarySearchTree.prototype.size = function () {
    // Declaro una variable que acumula el tamaño

};

BinarySearchTree.prototype.insert = function (value) {
    // Si el valor del arbol acutal es mayor que el valor a ingresar voy a la izquerda

};

BinarySearchTree.prototype.contains = function(checkValue) {
    // Si el valor del nodo actual es igual que el valor buscado retorno true

}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {

}

BinarySearchTree.prototype.breadthFirstForEach = function(cb) {
    // Declaro un for que inicialice un array con this
    // mientras el largo del mismo sea mayor a cero
    // Voy quitando el primer elemento del array 
    // De esta manera cada arbol recorrido va agregando sus subarboles a la ejecucion del for

}

module.exports = {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
};