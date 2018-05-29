const functions = require('firebase-functions');

const admin = require('firebase-adming');
admin.initializeApp(functions.config().firebase)

const SEND_API_KEY = functions.config().sendgrid.key


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SEND_API_KEY);

exports.firestoreEmail = functions.firestoreEmail
    .document('users/{userId}/buyers/{buyerId}')
    .onCreate(event => {
        
        const userId = event.params.userId;
        
        const db = admin.firestore()
        
        return db.collection('users').doc(userId)
                .get()
                .then(doc => {
                    
                    const user = doc.data()
                    
                    const msg = {
                        to: user.email,
                        from: 'hello@angularfirebase.com',
                        subject: 'New Buyer',
                        
                        templateId: '67b7b9a5-4ab5-45dc-9910-536642620e23',
                        substitutionWrappers: ['{{','}}'],
                        substitutions: {
                            name: user.displayName
                        }
                    };
                    
                    return sgMail.send(msg)
                })
                .then(() => console.log('email sent!') )
                .catch(err => console.log(err) )
        
        
});