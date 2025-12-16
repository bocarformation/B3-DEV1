// A NE PAS FAIRE

class EmailService {

    sendEmail(message: string) {
        console.log("Send email " + message)

    }
}

class SMSService {
    sendSMS(message: string) {
        console.log("Send SMS " + message);

    }
}


class NotificationService {
    private emailService: EmailService;
    private smsService: SMSService;

    constructor() {
        this.emailService = new EmailService();
        this.smsService = new SMSService();
    }

    sendNotification(type: string, message: string) {

        if (type === "email") {
            this.emailService.sendEmail(message);
        } else if (type === "sms") {
            this.smsService.sendSMS(message);
        }
    }

}

//En suivant le DIP

interface Notification {
    send(message: string): void;
}

// Implémentation pour l'email
class EmailService implements Notification {
    send(message: string) {
        console.log("Send email with content: " + message);

    }
}

class SMSService implements Notification {
    send(message: string) {
        console.log("Send SMS with content: " + message);

    }
}

class PushNotificationService implements Notification {
    send(message: string) {
        console.log("Send push notif with content: " + message);

    }
}

class NotificationService {
    private notification: Notification;

    // Le service reçoit une instance de Notification via Injection de dépendance
    constructor(notification: Notification) {
        this.notification = notification;
    }

    sendNotification(message: string) {
        this.notification.send(message)
    }
}


//Email

const emailServ = new EmailService();
const emailNotification = new NotificationService(emailServ);

emailNotification.sendNotification("Bonjour via le mail");

// SMS

const smsServ = new SMSService();
const smsNotification = new NotificationService(smsService);

smsNotification.sendNotification("Salut via SMS");

//PUSH

const pushService = new PushNotificationService();
const pushNotif = new NotificationService(pushService);

pushNotif.sendNotification("Notification push")

