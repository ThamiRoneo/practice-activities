class Player {
    constructor(name, currentRoom, inventory) {
        this.name = name;
        this.currentRoom = currentRoom;
        this.inventory = inventory;
    }
}

class Room {
    constructor(description, items, connectedRooms){
        this.description = description;
        this.items = items;
        this.connectedRooms = connectedRooms;
    }
}

class Item {

}

class Game {
    
}
