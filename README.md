
# Send whatsApp message using Node.js
Direact link to main website (https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates)


What is purpose for this project?
To send a whatApp message to a user who register on portal.


What we have implemented in this project?
- User Signup
- User get a whatsApp message of successful register


#Required dependencies:
- Node is installed (v 14.x)
- Postman is installed (Version 10.12.3-230318-0431)
- Mongodb altles free tier cluster
- Git is installed.

#Create development.env to setup required environment variables
- Go to the pre-start folder and env>development.env file directory
- NODE_ENV=development
- MONGO_URI=""


#DIALOF_URI=https://waba-sandbox.360dialog.io
#DIALOF_TOKEN=token




## Server ##
PORT=3000
HOST=localhost


#Major steps are followed to create/setup:
`npm install`



### local server
`npm run start:dev`


### prod build
`npm run build`


### prod build run
`node dist/index.js`


# postman  api url
type get  "{host-url}/api/v1/user/sign-up"
in body pass {role, name, email, phoneNumber, countryCode, dob} 

