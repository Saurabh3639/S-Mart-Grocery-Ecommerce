# S-Mart-Grocery-Ecommerce React.js App
This is the MERN Stack grocery ecommerce application

# 1) Working on Backend
npm init
npm i express dotenv mongoose
npm i bcryptjs jsonwebtoken validator nodemailer cookie-parser body-parser
npm i express-fileupload cloudinary
npm i stripe
npm run dev

# 2) Working on frontend
cd grocery-frontend
npx create-react-app .
npm i axios react-alert react-alert-template-basic react-helmet react-redux redux redux-thunk redux-devtools-extension react-router-dom overlay-navbar
npm i react-icons
npm i webfontloader
npm i react-material-ui-carousel
npm i @material-ui/core
npm i @material-ui/icons
npm i @material-ui/lab
npm i react-js-pagination
npm i @stripe/react-stripe-js @stripe/stripe-js
npm i @material-ui/data-grid
npm i react-chartjs-2
npm i chart.js
npm start

# 3) Add Proxy in Frontend package.json
"proxy": "Your Network Address:4000 For Server"
i.e.
"proxy": "http://192.168.56.1:4000"

# 4) sendEmail.js
Add in config.env -> SMPT_MAIL, SMPT_PASSWORD

# 5) Cloudinary
https://cloudinary.com/users/login
Sign up for free -> Login ->
Copy/Paste: Cloud Name, API Key, API Secret -> in config.env
Media Library -> Add Folder: avatars, products 

# 6) Stripe (Payment test)
Register -> Login -> 
https://dashboard.stripe.com/test/dashboard
Copy/Paste: Publishable key, Secret key -> in config.env


# 7) Payment -> Card Info
For Card No: Google -> Stripe card -> Testing|Stripe Documentation
https://dashboard.stripe.com/test/payments -> All successfull payments will be visible. 

# 8) Connect to MonogoDB Atlas
New Project: Ecommerce
Cluster: GroceryEcommerce  
Database access -> New User -> Built-in Role: Read and write to any database
Network Access -> Add IP Address: 0.0.0.0/0
Database -> Connect -> Connect Your Application
Change DB_URI

# 9) Production Build
To create optimized production build:
cd grocery-frontend 
npm run build
To run app:
npm run dev
browser -> localhost:4000
