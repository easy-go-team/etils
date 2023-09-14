export class LinkedList {
    private count: number
    private head: Node | undefined
    private equalsFn: Function

    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element: any) {
        const node = new Node(element)
        let current: Node
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while(current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

}

export function defaultEquals(a: any, b: any) {
    return a === b
}

export class Node {
    element: any
    next: any
    constructor(element: any) {
        this.element = element
        this.next = undefined
    }
}