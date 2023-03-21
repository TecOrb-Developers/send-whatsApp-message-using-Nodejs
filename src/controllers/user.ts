import { CustomError ,} from "@utils/errors";
import { sendWhatsappViaDialof360template } from '@utils/helpers';
import StatusCodes from "http-status-codes";
import { errors } from "@constants";
import { userModel } from "@models/index";
const jwt = require("jsonwebtoken");


function signUp(user: any ): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const { role, name, email, phoneNumber, countryCode, dob } = user
            const userFound: any = await userModel.findOne({ phoneNumber: phoneNumber, isDelete: false })
            if (userFound) {
                new CustomError(errors.en.noSuchAccountExist, StatusCodes.BAD_REQUEST)
            } else {
               const userData = await userModel.create(user);
                const token: string = jwt.sign({
                    id: userData.id,
                    role,
                },
                    process.env.JWT_SECRET_TOKEN,
                    { expiresIn: "30d" }
                );
                await userModel.findOneAndUpdate({ _id: userData._id },
                    { $set: { token: token } })
                    sendWhatsappViaDialof360template({
                        "to": phoneNumber,
                        "recipient_type": "individual",
                        "type": "template",
                        "template": {
                            "namespace": "name_space_client_id",
                            "name": "client_template_name",
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
                                            "link": "https://res.cloudinary.com/df8pll668/image/upload/v1677741583/niid0vjgvbv4d7csrkz1.png"
                                        }
                                    }]
                                },
                                {
                                    "type": "body",
                                    "parameters": [
                                        {
                                            "type": "text",
                                            "text": "Send the Owner Name"

                                        }]
                                },
                                {
                                    "type": "button",
                                    "index": "0",
                                    "sub_type": "url",
                                    "parameters": [
                                        {
                                            "type": "text",
                                            "text": `A url Link`
                                        }
                                    ]
                                }
                            ]
                        }
                    })
                resolve({ token, name: userData.name, email: userData.email, phoneNumber: userData.phoneNumber });
            }
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}











// Export default
export default {
    signUp
   

} as const;
