class Player {
    constructor(name, currentRoom) {
        this.name = name;
        this.currentRoom = currentRoom;
        this.inventory = [];
    }
    // move method
    move() {

    }
    // pickup method
    pickUpItem() {

    }
    // showInventory method
    showInventory() {

    }
}



class Room {
    constructor(description){
        this.description = description;
        this.items [];
        this.connectedRooms = {};
    }
    // addItem method
    addItem() {

    }
    // removeItem method
    removeItem() {

    }
    // connectRoom method
    connectRoom() {

    }
}

class Item extends Room {
    constructor(name, description) {

    }
    // inspect method
    inspect() {
        return this.description
    }
}

class Game {
    constructor() {
        this.rooms = [];
        this.player = null;
    }
    // start method
    start() {

    }
    // createWorld method
    creatWorld() {

    }
    // processCommand method
    preocessCommand() {

    }
}
