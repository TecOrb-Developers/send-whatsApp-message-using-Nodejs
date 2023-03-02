
import axios from 'axios';


function sendWhatsappViaDialof360template(messageBody: any) {
    return new Promise(async (resolve, reject) => {
        try {
            const url = `${process.env.DIALOF_URI}/v1/messages`
            const response = await axios.post(url, messageBody,
                {
                    headers: {
                        "D360-API-KEY": process.env.DIALOF_TOKEN || ""
                    }
                });
            if (response.data.hasOwnProperty('meta')) {
                resolve({ success: false })
            } else {
                resolve({ success: true })
            }
        } catch (err) {
            const response = err.response;
            if (response.data.hasOwnProperty('meta')) {
                resolve({ success: false })
            }
            reject(err)
        }
    })
}






export {
   sendWhatsappViaDialof360template
}
 

