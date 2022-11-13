
class Node {
    constructor(value, leftNode, rightNode) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class BST {
    constructor(root) {
        this.root = root;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = node;

            return;
        }

        let iterator = this.root;

        while(true) {
            if (newNode.value > iterator.value) {
                if (iterator.leftNode == null) {
                    iterator.leftNode = newNode;

                    return;
                }

                iterator = iterator.leftNode;
            } else {
                if (iterator.rightNode == null) {
                    iterator.rightNode = newNode;

                    return;
                }

                iterator = iterator.rightNode;
            }
        }
    }

    find(value) {
        let iterator = this.root;

        while(iterator) {
            if (iterator.value === value) {
                return true;
            } else if (value > iterator.value) {
                iterator = iterator.leftNode;
            } else {
                iterator = iterator.rightNode;
            }
        }

        return false;
    }
}

function main() {
    const tree = new BST(new Node(5));
    tree.add(3);
    tree.add(6);
    tree.add(1);

    console.log(tree.find(3));
    console.log(tree.find(1));
    console.log(tree.find(2));
}

main();
