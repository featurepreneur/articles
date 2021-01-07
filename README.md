
# Featurepreneur Articles

#### Note: We have separated th commands for Macbook and Ubuntu as they have small variations. 

### Tools have to be installed for FPR (applicable for Macbook only)
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
# or
https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/

# verify yarn
yarn --version

# Install vue
npm install vue@next

# Install vue-cli
npm install -g @vue/cli
# or
yarn global add @vue/cli

# vuepres
sudo yarn global add vuepress

```


### How to deploy FPR articles? (Applicable only for Macbook)
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



### Tools have to be installed for FPR (applicable for Ubuntu only)
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
yarn global add vuepress
```


### How to deploy FPR articles? (Applicable only for Ubuntu)
```
sudo apt install nodejs

# Verify Nodejs
node --version

# verfiy NPM
npm --version

# Yarn installation
sudo curl -o- -L https://yarnpkg.com/install.sh | bash

# verify yarn
yarn --version

# Install vue-cli
npm install -g @vue/cli

yarn global add vuepress

#Install yarn to package
yarn

# run and check locally
vuepress dev docs

#build for prod
vuepress build docs

# deploy on prod (github pages)
bash deploy.sh
```