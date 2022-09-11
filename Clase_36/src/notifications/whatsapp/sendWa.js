import twilio from 'twilio'

const accountSid = "XXXX"
const authToken = "XXXX"

const client = twilio(accountSid, authToken)

try{
    const message = await client.messages.create({
        body: 'Hola soy un SMS desde Node.js',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+5492644824313'
    })
    console.log(message)
} catch (error){
    console.log(error)
}