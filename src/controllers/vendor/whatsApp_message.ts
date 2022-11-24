import { sendWhatsappViaDialof360template } from '@utils/helpers';


function send_whatsApp_messages(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            if (body.number) {
                sendWhatsappViaDialof360template({
                    "to": body.number,
                    "recipient_type": "individual",
                    "type": "template",
                    "template": {
                        "namespace": "template_namespace",
                        "name": "template_name",
                        "language": {
                            "code": "en",
                            "policy": "deterministic"
                        },
                        "components": [
                            {
                                "type": "header",
                                "parameters": [{
                                    "type": "image",
                                    "image": {
                                        "link": "images urls"
                                    }
                                }]
                            },
                            {
                                "type": "body",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": "Body text"

                                    }]
                            },
                            {
                                "type": "button",
                                "index": "0",
                                "sub_type": "url",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": `button_urls`
                                    }
                                ]
                            }
                        ]
                    }
                })
                resolve({ success: true })
            }
        } catch (err) {
            console.log(err)
            reject(err)
        }
    });
}


// Export default
export default {
 send_whatsApp_messages
} as const;