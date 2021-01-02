
# VuePress Theme Featurepreneur


### Tools have to be installed for FPR
```
# Nodejs
sudo apt install nodejs

# Verify Nodejs
node --version

# Install NPM
sudo apt install npm

# verfiy NPM
npm --version

# Yarn installation
curl -o- -L https://yarnpkg.com/install.sh | bash

# verify yarn
yarn --version

# Install vue-cli
npm install -g @vue/cli

# vuepres
sudo yarn global add vuepress

```


### How to deploy FPR articles?
```
git clone https://github.com/featurepreneur/articles
cd articles

# simple setup on the project folder
yarn

# run and check locally
sudo vuepress dev docs

# build for prod
sudo vuepress build docs

# deploy on prod (github pages)
sudo bash deploy.sh
```