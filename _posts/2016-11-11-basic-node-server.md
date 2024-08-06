---
layout: post
title: Setting Up a Basic Node.js Server
subtitle: A Comprehensive Guide to Configuring Your Node.js Environment
tags: [Node.js, Server Setup, JavaScript, Web Development]
thumbnail-img: /assets/img/post/node-server/node.js.avif
share-img: /assets/img/post/node-server/node.js.avif
comments: true
mathjax: true
author: Rajan Maharjan
---

![Node.js Server Setup](/assets/img/post/node-server/node.js.avif)

Running a Node.js Server on Ubuntu: A Step-by-Step Guide

In this guide, we will cover the following:

- **Installation**  
  Set up your server environment by installing the necessary software.

- **Setup**  
  Configure your server to run your Node.js application.

We will install and configure the following:

1. **Nginx**  
   A high-performance web server that can also act as a reverse proxy for your Node.js application.

2. **Node.js**  
   A JavaScript runtime built on Chrome's V8 JavaScript engine, designed to build scalable network applications.

3. **Yarn**  
   A fast, reliable, and secure dependency management tool for JavaScript.

4. **PM2**  
   An advanced process manager for Node.js applications, designed to keep your app running smoothly.

5. **MongoDB**  
   A NoSQL database that provides high performance, high availability, and easy scalability.

6. **Git**  
   A version control system to manage your codebase effectively.

<p>&nbsp;</p>
## INSTALLATION PART for Linux (Ubuntu System)
<p>&nbsp;</p>

1. **Install Nginx**

    ```bash
    sudo apt-get update
    sudo apt-get install nginx
    ```

    [Reference](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)

2. **Install Node.js**

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    [Reference](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

3. **Install Yarn**

    ```bash
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update
    sudo apt-get install yarn
    ```

    [Reference](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

4. **Install PM2**

    ```bash
    sudo npm install -g pm2
    ```

    [Reference](https://pm2.keymetrics.io/docs/usage/quick-start/)

5. **Install MongoDB**

    ```bash
    sudo apt-get install -y mongodb
    sudo systemctl start mongodb
    sudo systemctl enable mongodb
    ```

    Adding an Administrative User:

    ```bash
    mongo
    use admin
    db.createUser({user: "admin", pwd: "password", roles:[{role:"userAdminAnyDatabase", db: "admin"}]})
    exit
    ```

    [Reference](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-mongodb-on-ubuntu-16-04)

<p>&nbsp;</p>
## SETUP PART
<p>&nbsp;</p>

### Node.js Server

1. **Run the Server Using PM2**

   Navigate to your project directory and start the server:

   ```bash
   pm2 start app.js --name my-node-app
  ```

  Note: Ensure app.js is the entry point of your application.

Your Node.js application will now be accessible at:

`http://<SERVER_ADDRESS>:<PORT>`

- SERVER_ADDRESS: The IP address or domain name of your server.
- PORT: The port on which your Node.js server is running.

2. **Configure Nginx as a Reverse Proxy**

    - Create a new Nginx configuration file in `/etc/nginx/sites-available/`:

    ```bash
    sudo nano /etc/nginx/sites-available/my-node-app
    ```
    
    - Add the following configuration:

    ```nginx
    server {
        listen 80;
        server_name <SERVER_ADDRESS>;

        location / {
            proxy_pass http://localhost:<PORT>;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
    - Enable the configuration by creating a symbolic link:

    ```bash
    sudo ln -s /etc/nginx/sites-available/my-node-app /etc/nginx/sites-enabled/
    ```
   
   - Reload and restart Nginx to apply changes:

    ```bash
    sudo systemctl reload nginx
    sudo systemctl restart nginx
    ```

What did I miss? Let me know in the comments and I’ll add it in!