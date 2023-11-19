# What-To-Wear - Full Stack Web Application using MERN

## Image Showcase
![social_media_app_home](https://user-images.githubusercontent.com/99443055/232885539-77f6b3f0-7faa-4426-8877-6a41578a385a.jpeg)
<br>


## Instructions
### Run the Program
#### 1. Open two terminals and navigate them to the project directory
```
cd <YOUR_LOCAL_DIRECTORY>/What-To-Wear_Fashion_Socializing_Web_App
```

#### 2. Install node.js and npm
- Reference link: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.

#### 3. Lower the version of npm due to dependencies used
- Get nvm for managing version of npm.
- Click on this GitHub reference link: https://github.com/nvm-sh/nvm.
- Go to the 'Installing & Updating' section and follow the steps to type in commands in the project directory.

- Commands are as follows:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

- Choose the node version 16 after getting nvm.
```
nvm use 16
```
- Then, an older version of node could be used.
```
Now using node v16.18.1 (npm v8.19.2)
```

#### 4. Start the server and the client
- One terminal goes to the "server" directory, another one uses the "client" directory.


- Server side:
```
cd server
npm start
```
- Similar messages could be expected if succeeded:
```
> server@1.0.0 start
> nodemon index.js

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server running on port: 5000
```

- Client side:
```
cd client
npm start
```
- Similar messages could be expected if succeeded:
```
Compiled successfully!

You can now view mern-stack-client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://<YOUR_IP_ADDRESS>:3000
```

#### 5. View the Website Home Page
- A new webpage like below should be opened with your default browser. 
<!-- HOME image here -->
- You can only view and search the posts now as you haven't signed in.
- Click the post titles or type in some keywords to search for outfits you like! 


#### 6. Authentication (Sign Up or Sign In as a User)
- Press the "SIGN IN" button at the top right corner inside the navigation bar.
- A page with sign-in form should be shown to let you to login with your registered account or google account.
<!-- Sign In image here -->

- If you don't have a account with What-To-Wear, click the bottom line in the login form.
- Then, a sign-up form should be shown. Type in necessary information to register.
<!-- Sign Up image here -->

- After signing up, your account will be signed in automatically.
<!-- Finish Sign Up image here -->

- Click the "LOGOUT" button to sign out and get back to the starting home page.


#### 7. Website Functionalities

##### Read Posts
- Click the title of the post to read its details in another focused page
<!-- Read Posts image here -->


##### Create/Write Posts
- Input the title, message, tags (split with comma ','), and upload file for a complete post.
- Not required to have all inputs.
<!-- Create Posts image here -->


##### Edit Posts
- Click the top-right three dots on post grids you created to edit the post in the post form area.
<!-- Edit Posts image here -->

##### Like Posts
- Click the left-bottom thumb-like icon on post grids to like the posts.
<!-- Like Posts image here -->

##### Delete Posts
- Click the right-bottom trash-bin-like icon on post grids to delete the posts you created.
<!-- Delete Posts image here -->

##### Search Posts
- Enter content keywords or tags to search for posts.
- Click the top-left "What-To-Wear" logo to go back to the home page after search.
<!-- Search Posts image here -->


<br>


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.<br>

## License
Copyright [2023] [Chun Sheung Ng]<br>
