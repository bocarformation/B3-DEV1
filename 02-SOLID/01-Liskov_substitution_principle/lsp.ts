// Classe parente
class User {
    constructor(public id: string, public name: string) { }


    canCreateEvent(): boolean {
        return false;
    }

    canDeleteEvent(): boolean {
        return false;
    }
}


class Admin extends User {

    canCreateEvent(): boolean {
        return true
    }

    canDeleteEvent(): boolean {
        return true
    }

}

class Organizer extends User {

    canCreateEvent(): boolean {
        return true;
    }

    canDeleteEvent(): boolean {
        return false;
    }
}

// CODE QUI RESPECTE LE LSP
function allowCreateEvent(user: User): boolean {
    return user.canCreateEvent();
}

function allowDeleteEvent(user: User): boolean {
    return user.canDeleteEvent();
}


const myAdmin = new Admin("1", "Benoit");

const myOrganizer = new Organizer("2", "Victor");

const myUser = new User("3", "Sam");

console.log(allowCreateEvent(myAdmin));
console.log(allowCreateEvent(myOrganizer));
console.log(allowDeleteEvent(myAdmin));
console.log(allowDeleteEvent(myOrganizer));
console.log(allowDeleteEvent(myUser));
console.log(allowCreateEvent(myUser));


// CODE QUI NE RESPECTE PAS LE LSP

class BuggedOrganizer extends User {
    canCreateEvent(): boolean {
        throw new Error("Ne peut pas créer des évenements") // Pas le comportement attendu => violation du LSP
    }

    canDeleteEvent(): boolean {
        return false
    }
}

const jean = new BuggedOrganizer("4", "Jean")
allowCreateEvent(jean);
