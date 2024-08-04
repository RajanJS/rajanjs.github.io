---
layout: post
title: Setting Up a Basic Server for the MEAN Stack
subtitle: A Comprehensive Guide to Configuring Your MEAN Stack Environment
tags: [Node.js, MEAN Stack, MongoDB, Express.js, Angular,js]
thumbnail-img: /assets/img/post/mean/MEAN-tech-stack.png
share-img: /assets/img/post/mean/MEAN-tech-stack.png
comments: true
mathjax: true
tags: [MEAN Stack, MongoDB, Tech STack, Express.js, Angular.js, Node.js]
author: Rajan Maharjan
---

![MEAN Tech Stack](/assets/img/post/mean/MEAN-tech-stack.png)

Running a Node.js Server and AngularJS Application on a Single Ubuntu Server

In this guide, we will cover two main sections:

- **Installation**  
  Get your server ready by installing the necessary software.


- **Setup**  
  Configure your server to run both the Node.js backend and the AngularJS frontend.

Will be installing following;

1. **Nginx**  
  Nginx acts as a front-end server, which, in this case, proxies requests to a Node.js server.

2. **NodeJS**  
  Cross-platform JavaScript run-time environment that executes JavaScript code server-side

3. **Yarn**  
  Fast, reliable, and secure dependency management

4. **PM2**  
  Advanced process manager for production Node.js applications

5. **MongoDB**  
  MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need

6. **Git**  
  Git `(/ɡɪt/)` is a version control system


<p>&nbsp;</p>
## INSTALLATION PART for Linux (Ubuntu System)
<p>&nbsp;</p>

1. **Install Nginx**

    ```bash
    sudo apt-get install nginx
    ```

    [Reference](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)


2. **Install Node.js**

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```

    Install Node.js:

    ```bash
    nvm install --lts
    ```

    [Reference](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)


3. **Install Yarn**

    ```bash
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    ```

    [Reference](https://yarnpkg.com/lang/en/docs/install/#debian-stable)


4. **Install PM2**

    ```bash
    sudo npm install pm2 -g
    ```

    [Reference](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)


5. **Install MongoDB**

    ```bash
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5

    echo "deb [arch=amd64,arm64] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list

    sudo apt-get update

    sudo apt-get install -y mongodb-org

    sudo systemctl start mongod

    sudo systemctl enable mongod
    ```

    Adding an Administrative User:

    ```bash
    mongo

    use admin

    db.createUser({user: "peacenepal", pwd: "peacezone@123", roles:[{role:"dbAdminAnyDatabase", db: "admin"}]})

    # Type 'exit' and press ENTER or use CTRL+C to leave the client.

    sudo nano /etc/mongod.conf
    ```

    [Reference](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04)


<p>&nbsp;</p>
## SETUP PART
<p>&nbsp;</p>

### Node.js Server

1. **Run the server using PM2**

   Go to the project folder and run the following command:

   ```bash
   pm2 start app.js -i 2 --name api-server
   ```

   Note: The command depends on your project.

   After that, the API would be accessible at:

   
   `http://<SERVER_ADDRESS>:<PORT>`
   

   - SERVER_ADDRESS: IP address or domain name used for server access.

   - PORT: Port used to start the Node.js server.


2. **Angular App Setup**

- Add the project files to the server in your desired location.
-  Configure Nginx to serve our app files
    
    - Create a new Nginx configuration file in the following folder:
    
        ```bash
        /etc/nginx/sites-enabled/ 
        ```
    <!-- Adding a blank line for spacing -->
    
    - Add the following details to the configuration file:

        ``` nginx
            server {
            listen 80;
            listen [::]:80;

            root <PROJECT_FOLDER_PATH>;
            index index.html index.htm index.nginx-debian.html;

            server_name <SERVER_ADDRESS>;

            location / {
                try_files $uri $uri/ =404;
            }
        }
        ```
    <!-- Adding a blank line for spacing -->

    - Reload the Nginx server with the following commands to apply the new server block:
    
        ``` bash
        sudo systemctl reload nginx
        
        sudo systemctl restart nginx
        ```


What am I missing here? Let me know in the comments and I’ll add it in!

#### Summary:
- **Headings** are used to organize the content.
- **Code Blocks** contain commands and configurations.
- **Notes** clarify details for commands and configuration.
- **Instructions** are presented in a clear, step-by-step format.
