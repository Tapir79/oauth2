
    
# Run                 
> Server: node index.js      
> Client: npm start         
> Both concurrently: npm run dev (starts in development mode)    

# install node.js and express
npm init         
npm install --save express   

## Nodemon hot reload
npm install --save nodemon 

## Mongoose to use MongoDB
npm install --save mongoose    

## Cookies     
npm install --save cookie-session

## Concurrently (execute both server and client)
npm install --save concurrently

## http-proxy-middleware
npm install http-proxy-middleware --save

## Passport 
Base passport module (OAuth 2.0): 
npm install passport-google-oauth20@2 --save

Google+ API https://console.cloud.google.com/        
Enable API       
Generate API credetial      
Create Oauth client ID       
Configure consent screen (when user is prompted if they grant permission)
Web application

# Client side 

## redux and react-redux
npm install --save redux react-redux react-router-dom

## Axios and redux-thunk      
npm install --save axios redux-thunk

## Materialize 
npm install materialize-css@next

# install Heroku cli 
brew tap heroku/brew && brew install heroku

## Heroku deployment 
1. Login to Heroku:     
> heroku login 
heroku: Press any key to open up the browser to login or q to exit: 
(login in the browser)
1. heroku create 
Creating app... done, ⬢ tranquil-meadow-47893
https://tranquil-meadow-47893.herokuapp.com/ | https://git.heroku.com/tranquil-meadow-47893.git
1. Set remote repo called heroku 
> git remote add heroku https://git.heroku.com/tranquil-meadow-47893.git
> heroku buildpacks:set heroku/nodejs
> git push heroku master    
1. Open https://tranquil-meadow-47893.herokuapp.com/

# Git
Remove remote files:        
> git rm -r --cached File-or-FolderName       
> git commit -m "Removed folder from repository"       
> git push origin master         

Git add and commit:       
> git add .         
> git commit -m "changed something"        
> git push heroku master (heroku) (OR) git push origin master (github)        

