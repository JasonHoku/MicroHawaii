microHawaii ReactJS Web-App Public Development 
====


### Vocabulary (WIP)


NodeJS

NPM

ReactJS

GitHub 


### Commands

Get fresh files:
git clone https://github.com/maui-Art-Prints/FazadAzad

Install modules:
npm i

Get latest update:
git pull




# Setup, Step 1.


Install Prerequisites:

NodeJS with NPM: https://nodejs.org/en/
git: https://git-scm.com/downloads


# Download Source Files For Web App & Set Up Project Workspace.



## A) Get files with git:
Type into git bash in the desired setup directory (git install prequisite): 

git clone https://github.com/Maui-Art-Prints/FazadAzad

It should echo out (along the lines of):

Cloning into 'PrettCoolWeb'...
remote: Enumerating objects: 98, done.
remote: Counting objects: 100% (98/98), done.
remote: Compressing objects: 100% (66/66), done.
remote: Total 1750 (delta 41), reused 70 (delta 28), pack-reused 1652
Receiving objects: 100% (1750/1750), 69.04 MiB | 28.70 MiB/s, done.
Resolving deltas: 100% (580/580), done.
Updating files: 100% (1625/1625), done.

*28.70 MiB/s: Nice...

Now you have the source code and may edit and run it as a React app.

## B) After making changes, upload changes to the group git repo by running the following git commands:

*note, change  "your message about changes here" to a description of the update

git add .
git commit -m "your message about changes here"
git push

## The Private Personal Passwords File (Not Yet Implemented)

Find example.env in your project root directory and rename it to .env 
This file is set to be auto excluded in sharing and will be your passwords and keys file.



## Installation Instructions & Notes

This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## Development Notes:

# IP Port routing

sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8081


# to out of network ip

sysctl net.ipv4.ip_forward=1
sudo iptables -A INPUT -i eth0 -p tcp --dport 3444 -j ACCEPT
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 98.155.235.253:3444
iptables -t nat -A POSTROUTING -j MASQUERADE


# flush rules, reset:
sudo iptables -F


/etc/hosts

127.0.0.1   localhost
127.0.1.1   guest-desktop
your_server_IP example.com
your_server_IP test.com


# Additional Learning notes WIP & DIY:



### Updating depreciated modules:

react-scripts contained several depreciations and required updating, which was processed in this order:

npm audit reveals react-scripts

Best practice is to create a fresh skeleton site from modern organizations and move over dependent modules and source.





# Build a ReactJS app with web frameworks of Bootstrap from scratch for learning:

*npx comes with some npm/nodejs installs also installable independently






### Run the following in git with npm installed in a fresh directory to start a blank react bootstrap app:

npx create-react-app react-bootstrap-app
npm install react-bootstrap bootstrap






### Add source & project dependencies.

npm install node-sass

# FazadAzad
