//  Voici un mauvais exemple de SRP

// class UserService {

//     addUser(user: User) {
//         // Ici on ajoute un utilisateur
//         console.log("User is add ! : " + user.name);

//         //Simulaiion d'un mail
//         this.sendWelcomeEmail(user);

//         // Sauvegarde en BDD
//         this.saveUserToDatabase(user)
//     }

//     private sendWelcomeEmail(user: User) {
//         console.log("Sending mail to " + user.email);

//     }

//     private saveUserToDatabase(user: User) {
//         console.log("Saving user in Database " + user.name);

//     }
// }

//  AVEC UTILISATION DU SRP

class UserService {

    constructor(
        private userRepository: UserRepository,
        private emailService: EmailService
    ) { }

    addUser(user: User) {
        // Ajout de l'utilisateur via un repository
        this.userRepository.save(user);

        // Envoi du mail
        this.emailService.sendWelcomeEmail(user);
    }
}


class UserRepository {
    save(user: User) {
        console.log("User is add ! : " + user.name);

    }
}

class EmailService {
    sendWelcomeEmail(user: User) {
        console.log("Sending mail to " + user.email);
    }
}