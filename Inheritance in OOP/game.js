class Player {
    constructor(name, currentRoom) {
        this.name = name;
        this.currentRoom = currentRoom;
        this.inventory = [];
    }
    // move method
    move(direction) {
        const nextRoom = this.currentRoom.connectedRooms[direction];

        if(nextRoom) {
            this.currentRoom = nextRoom;
            console.log(`You moved ${direction}.`);
            console.log(this.currentRoom.getRoomDetails());
        } else {
            console.log("You can't go that way.");
        }
    }
    // pickup method
    pickUpItem(itemName) {
        const item = this.currentRoom.removeItem(itemName);

        if (item) {
            this.inventory.push(item);
            console.log(`${item.name} added to inventory.`);
        } else {
            console.log("Item not found.");
        }
    }
    // showInventory method
    showInventory() {
        if (this.inventory.length === 0) {
            console.log("Inventory is empty.");
            return;
        }

        console.log("Inventory:");
        this.inventory.forEach(item =>
            console.log(`- ${item.name}`)
        );

    }
}



class Room {
    constructor(description){
        this.description = description;
        this.items = [];
        this.connectedRooms = {};
    }
    // addItem method
    addItem(item) {
        this.items.push(item);
    }
    // removeItem method
    removeItem(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if(index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return null;
    }
    // connectRoom method
    connectRoom(direction, room) {
        this.connectedRooms[direction] = room;
    }
    // getDetails method
    getRoomDetails() {
        const itemNames = this.items.map(item => item.name);

        return `Room: ${this.description}\nItems: ${itemNames.length ? itemNames.join(', ') : "None"}\nConnected Rooms: ${Object.keys(this.connectedRooms).join(', ')}`;
    }
}

class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    // inspect method
    inspect() {
        return `${this.name}: ${this.description}`;
    }
}

class Game {
    constructor() {
        this.player = player;
    }
    // start method
    start() {
        console.log("Welcome to the Adventure Game!");
        console.log(this.player.currentRoom.getRoomDetails());
    }

    // processCommand method
    processCommand(command) {
        const parts = command.toLowerCase().split(" ");
        const action = parts[0];
        const value = parts.slice(1).join(" ");

        switch (action) {
            case "move":
                this.player.move(value);
                break;

            case "pickup":
                this.player.pickUpItem(value);
                break;

            case "inventory":
                this.player.showInventory();
                break;

            case "look":
                console.log(
                    this.player.currentRoom.getRoomDetails()
                );
                break;

            default:
                console.log("Unknown command.");
        }

    }
}

// Create rooms
const hall = new Room("A large entrance hall");
const kitchen = new Room("A small kitchen");

// Connect rooms
hall.connectRoom("north", kitchen);
kitchen.connectRoom("south", hall);

// Create items
const key = new Item(
    "Key",
    "A rusty old key"
);

const torch = new Item(
    "Torch",
    "Useful in dark places"
);

// Add items to rooms
hall.addItem(key);
kitchen.addItem(torch);

// Create player
const player = new Player("Romeo", hall);

// Create game
const game = new Game(player);

// Start game
game.start();

// Commands
game.processCommand("pickup key");
game.processCommand("inventory");
game.processCommand("move north");
game.processCommand("pickup torch");
game.processCommand("inventory");
