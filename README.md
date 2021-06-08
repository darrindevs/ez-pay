# EZ Pay

EZ Pay is an app that makes Peer to Peer Payments easy!


## About the project

This was the final class project for UC Berkeley Full Stack Web Bootcamp. The challenge was to build a MERN app from scratch. I worked on this as a solo project. 

## In Action

![](https://zno.s3-us-west-1.amazonaws.com/ezp_google.gif)

![](https://zno.s3-us-west-1.amazonaws.com/ezp_breakpoints.gif)


## Tech Stack

♻️ Node.js - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

⚡️ Express - Express is a fast, unopinionated, minimalist web framework for node.

🌎 MongoDB Atlas - MngoDB Atlas is the easiest way to deploy, operate and scale MongoDB databases in the cloud. 

🐿 Mongoose - Mongoose provides a straight-forward, schema-based solution to model your application data. 

🛂 Passport JS - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web app. This app uses the Google Strategy for authentication. 

⚛️ React - React is an open-source front-end JavaScript library for building user interfaces or UI components.

💨 Tailwind CSS - Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with awesome classes. 

📦 npm - npm is a package manager for the JavaScript programming language.

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

😺 GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.

# Code Snippet 

~

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

~



## Author

🤓 [darrindevs](https://github.com/darrindevs)

