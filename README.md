#Chat Application in MERN

## Created first own server with express

### If we try to make an API call from frontend to backend, it will give a CORS error, to avoid it:

we need to provide proxy to our frontend app
So port of backend is 5000 and frontend is 3000, so we need to have same origin to access api from frontend to backend
so inside frontend => package.json => add proxy: https:127.0.0.1:5000

### Defined Scheme and Models with mongoose

Created chatModel schema or model, messageModel and userModel
This is the data structured and this is how it will be stored in the database
With the help of these models, mongoDB with understand how it needs to structure our data inside of the database
