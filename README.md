
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
# or
https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/

# verify yarn
yarn --version

# Install vue
npm install vue@next

# Install vue-cli
sudo npm install -g @vue/cli
# or
yarn global add @vue/cli

# vuepres
yarn global add vuepress

```


### How to setup in local (Mac Only)
```
# clone the repo
git clone git@github.com:featurepreneur/articles.git fpr-articles
cd fpr-articles

# simple setup on the project folder
yarn

# run and check locally
sudo vuepress dev docs

# you should see something like this
ℹ ｢wds｣: Project is running at http://0.0.0.0:8080/

# verify 
http://0.0.0.0:8080/ and check all previous articles available
```


### How to add a new page
```
Go to
docs -> _posts

copy 2021-01-14-zz-template.md and rename with this format 'yyyy-mm-dd--index-article_url_name'

start adding new content

shadow articles are here:
https://bit.ly/shadow-articels-sheet
```

### How to deploy FPR articles? (Applicable only for Macbook)
```
git clone git@github.com:featurepreneur/articles.git fpr-articles
cd fpr-articles

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