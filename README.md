<p align="center">
  <a href="https://womenwhocodecincy.github.io/">
    <img alt="WWC" src="src/images/WWC_teal.jpg" width="100" />
  </a>
</p>
<h1 align="center">
  Women Who Code Cincinnati
</h1>

Welcome to the Cincinnati Women Who Code repository, a Gatsby project that showcases members and shares resources. Collaboration is welcome and encouraged!



## 🚀 Quick start guide to contributing

1. **Locate an issue that needs work**

    Navigate to https://github.com/WomenWhoCodeCincy/WomenWhoCodeCincy.github.io/issues and review the list of open issues.
    When ready to work an issue, place a comment on the issue so others know it is being worked by you.  And PLEASE only comment if you plan to work the issue immediately. 

2.  **Fork the repository**

     In the upper right-hand corner, click on <img alt="WWC" src="src/images/fork.png" width="50" /> to fork this repo to your github account.

3. **Clone the repository**

    Navigate to your github account and locate the newly forked WomenWhoCodeCincy.github.io repo.
    Click the <img alt="WWC" src="src/images/code.png" width="50" /> button and copy the url.
    Using the command line or your favorite method of interacting with git, clone the repo
    ```shell
      git clone pasteInTheRepoNameHere
      ```
    
      Change directory into the root of the repo 
      ```shell
      cd WomenWhoCodeCincy.github.io
      ```
  
4. **Set upstream tracking**

    In order to pull the changes from the original repository into your forked version, which will keep the repos in sync, you need to add the original git repo as an upstream repository.
  Find the remote repos that are configured:
      ```shell
      git remote -v  
      ```
    That will return something similar to this:
      ```shell
      origin	https://github.com/yourusername/WomenWhoCodeCincy.github.io.git (fetch)
      origin	https://github.com/yourusername/WomenWhoCodeCincy.github.io.git (push)
      ```
    Set upstream tracking:
      ```shell
      git remote add upstream https://github.com/WomenWhoCodeCincy/WomenWhoCodeCincy.github.io.git
      ```
    Now check the remote repos again:
      ```shell
      git remote -v  
      ```
      Which will return something similar to this:
      ```shell
      origin	https://github.com/yourusername/WomenWhoCodeCincy.github.io.git (fetch)
      origin	https://github.com/yourusername/WomenWhoCodeCincy.github.io.git (push)
      upstream	https://github.com/WomenWhoCodeCincy/WomenWhoCodeCincy.github.io.git (fetch)
      upstream	https://github.com/WomenWhoCodeCincy/WomenWhoCodeCincy.github.io.git (push) 
      ```
     
5.  **Install Dependencies**
      ```shell
     npm install  
      ```
       You are all set to go!
4.  **Create a branch**

    Create a new branch off of the main branch. Please name the branch in a manner that is indicative of the issue being resolved.
    ```shell
    git checkout -b myNewBranchName
    ```

5.  **Open the source code and start editing!**
   
    Open the `WomenWhoCodeCincy.github.io` directory in your code editor of choice and start working!!!

6. **Create a pull request**

    Once your changes have been completed and tested, push your branch to your repo. In github, navigate to the fork you created of the WomenWhoCodeCincy.github.io repo. Click on Pull Requests in the main menu and select New Pull Request. 
    Under the Compare Changes title, click on compare across forks. This will pre-populate the repos and branches to be merged. Verify that the head repo is your forked repo and the branch is your branch. Verify that the base repo is the WomenWhoCodeCincy.github.io repo and the branch is main.
  <img alt="WWC" src="src/images/prRepos.png" width="850" /> 
  Click create pull request. The Open Pull Request page will appear which includes the pull request template for the base repo. Please complete the template and click Create Pull Request.
  On the right hand side of the screen, click on reviewers and select Alexx Mitchell
  <img alt="WWC" src="src/images/prReviewers.png" width="250" />
  You are now done and your pull request will be code reviewed. You will be notified regarding any feedback and when it has been approved.
  
## 🎶	 Keep your fork in sync 
  
  It is very important to keep your fork in sync with the original repo.  It is recommended that you sync prior to starting a new branch and also prior to creating pull request.
  Navigate to your main branch and execute this:
 ```shell
 git fetch upstream
 ```
Merge the changes from the upstream/main into your local main branch
```shell
git merge upstream/main
```
Push those changes to your fork 
```shell
git push origin main
```

## 💫 How to run the project locally
Open a terminal and navigate to your working branch. Execute the command
  ```shell
  npm start
  ```
The site will then be running locally on http://localhost:8000/
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Resources for Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

