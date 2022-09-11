import twilio from 'twilio'

const accountSid = "ACaaa399940cc40bab3e46f3137a028da2"
const authToken = "013c7a11fe057eefb3574d433b610ba6"

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