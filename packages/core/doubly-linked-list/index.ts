import { defaultEquals, LinkedList, Node } from '../linked-list/index';

export class DoublyLinkedList<T> extends LinkedList<T> {
    public tail: DoublyNode<T> | undefined
    constructor(equalFn = defaultEquals) {
        super(equalFn)
        this.tail = undefined
    }

    insert(element: T, index: number): boolean {
        if (index < 0 || index > this.count) {
            return false
        }
        const node = new DoublyNode(element)
        let current = this.head as DoublyNode<T>
        if (index === 0) {
            if (this.head == null) {
                this.head = node
                this.tail = node
            } else if (current) {
                node.next = this.head
                current.prev = node
                this.head = current
            }
        } else if (index === this.count) {
            current = this.tail as DoublyNode<T>
            current.next = node
            node.prev = current
            this.tail = node
        } else {
            const previous = this.getElementAt(index - 1) as DoublyNode<T>
            current = previous?.next
            if (previous && node) {
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
        }
        this.count++
        return true
    }

    removeAt(index: number) {
        if (index <= 0 || index > this.count) {
            return undefined
        }
        let current = this.head as DoublyNode<T>
        if (index === 0) {
            this.head = current?.next
            if (this.count === 1) {
                this.tail = undefined
            } else {
                // @ts-ignore
                this.head.prev = undefined
            }
        } else if (index === this.count - 1) {
            current = this.tail as DoublyNode<T>
            this.tail = current.prev
            // @ts-ignore
            this.tail.next = undefined
        } else {
            // @ts-ignore
            current = this.getElementAt(index)
            const previous = current.prev
            // @ts-ignore
            previous.next = current.next
            current.next.prev = previous
        }
        this.count--
        return current.element
    }
}

export class DoublyNode<T> extends Node<T> {
    public prev: DoublyNode<T> | undefined = undefined
    constructor(element: T, next = undefined, prev = undefined) {
        super(element, next)
        this.prev = prev
    }
}