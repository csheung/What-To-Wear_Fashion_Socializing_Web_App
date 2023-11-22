# What-To-Wear - Full Stack Web Application using MERN Stack


## Web App Home Page Preview
- Home Page with multiple components such as the navigation bar, the post list, the search form, the write post form, the pagination bar, etc. 
![social_media_app_home](https://user-images.githubusercontent.com/99443055/232885539-77f6b3f0-7faa-4426-8877-6a41578a385a.jpeg)
<br>


## Responsive Web Design
- Smaller browser window size: 
<img width="893" alt="Screenshot 2023-11-19 at 5 09 17 AM" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/7e48279d-a0f3-4fb9-a0b7-f0c8edc5a989">

- Phone screen size:
<img width="216" alt="Screenshot 2023-11-19 at 5 12 47 AM" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/a37f42cf-59e0-41a3-9342-a33dd399a150">

<br>

## Explanatory Diagrams
### Architecture Diagram
- Frontend (ReactJS) <-> Backend (NodeJS/Express) <-> Database (MongoDB)
![image](https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/0440785c-6a3a-44eb-b9ce-d422a54a6a22)
<br>

### Component Diagram
<img width="1090" alt="Screenshot 2023-11-22 at 1 12 50 PM" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/c977248a-6b7e-4e15-9f5a-372ca0201108">
Vertical Presentation
App<br>
|__ Navbar<br>
|__ Auth Form<br>
|__ Post List<br>
|   |__ Post<br>
|       |__ Like Button<br>
|       |__ Delete Button<br>
|       |__ Comment List<br>
|           |__ Comment<br>
|__ Search Form<br>
|__ Write Post Form<br>
|__ Pagination Bar<br>
<br>

### Entity Relationship Diagram
- A diagram showing the key data entities (User, Post) and relationships between them:
<img width="750" alt="Screenshot 2023-11-22 at 1 47 03 PM" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/bed2efa6-0610-4780-8193-f40ec761c2d2">

<br>
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
<img width="1562" alt="social_media_app_home_no_sign_in" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/0b68540c-9368-4a7f-99f3-c5ab14b1caa9">

- You can only view and search the posts now as you haven't signed in.
- Click the post titles or type in some keywords to search for outfits you like! 


#### 6. Authentication (Sign Up or Sign In as a User)
- Press the "SIGN IN" button at the top right corner inside the navigation bar.
- A page with sign-in form should be shown to let you to login with your registered account or google account.
<!-- Sign In image here -->
<img width="1435" alt="Screenshot 2023-11-19 at 5 06 03 AM" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/014f4986-7079-469b-8063-21423ea71c11">


- If you don't have a account with What-To-Wear, click the bottom line in the login form.
- Then, a sign-up form should be shown. Type in necessary information to register.
<!-- Sign Up image here -->
<img width="1490" alt="sign-up-page" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/d546704f-2f2c-40e9-b409-7297a9b32fdd">

- Error message appears to remind you the problems with your input.
<img width="310" alt="sign-up-error" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/92e88025-d0e2-4d91-8338-1f287333366f">

- After signing up, your account will be signed in automatically.
<!-- Finish Sign Up image here -->
<img width="1545" alt="sign-in-after-sign-up" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/7d5af5ae-f1fb-423b-a79b-96bf0c6bde52">

- Click the "LOGOUT" button to sign out and get back to the starting home page.


#### 7. Website Functionalities

##### Read Posts
- Click the title of the post to read its details in another focused page
<!-- Read Posts image here -->
<img width="1515" alt="read" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/c497a9be-7ff2-4a5e-82e1-165811167877">
<br>

##### Create/Write Posts
- Input the title, message, tags (split with comma ','), and upload file for a complete post.
- Not required to have all inputs.
<!-- Create Posts image here -->
<img width="350" alt="create_write" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/4637ee02-ebcf-4ef1-9302-2ccc10b71b5f">
<br>

##### Edit Posts
- Click the top-right three dots on post grids you created to edit the post in the post form area.
<!-- Edit Posts image here -->

##### Like Posts
- Click the left-bottom thumb-like icon on post grids to like the posts.
<!-- Like Posts image here -->

##### Delete Posts
- Click the right-bottom trash-bin-like icon on post grids to delete the posts you created.
<!-- Delete Posts image here -->
<img width="255" alt="post_grid_edit_like_del" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/545a883e-0d94-4ee7-bda1-8b31bcfa15ca">

##### Search Posts
- Enter content keywords or tags to search for posts.
- Click the top-left "What-To-Wear" logo to go back to the home page after search.
<!-- Search Posts image here -->
<img width="1420" alt="search" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/71584f44-0a30-4a28-aafb-57a4ef0cee7c">

##### Pagination
- Click the pagination bar to go to the next page with other posts. Each page contains 8 posts at most.
<!-- Pagination image here -->
<img width="1420" alt="pagination" src="https://github.com/csheung/What-To-Wear_Fashion_Socializing_Web_App/assets/99443055/4c32702d-e58c-4787-80d3-303a60a5ab46">

<br>


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.<br>

## License
Copyright [2023] [Chun Sheung Ng]<br>
