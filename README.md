# Sails Empty Application (v1.2.3)

A [Sails](https://sailsjs.com) Empty application using PUG Template and SASS

### Change logs
#### For using PUG Template
+ Install Dependencies `npm i consolidate pug`
+ Edit `configs/views.js`
+ Edit `tasks/config/sails-linker.js`
+ `views/layouts/layout.ejs` => `views/layouts/layout.pug`
+ `views/layouts/layout.ejs` => `views/layouts/layout.pug`
+ `views/404.ejs` => `views/404.pug`
+ `views/505.ejs` => `views/505.pug`

#### For using SASS
+ Install Dependencies `npm i --save-dev node-sass grunt-sass`
+ Add `tasks/config/sass.js`
+ Edit `tasks/config/copy.js`
+ Edit `tasks/config/sync.js`
+ Edit `tasks/register/compileAssets.js`
+ Edit `tasks/register/syncAssets.js`
+ `assets/styles/importer.less` => `assets/styles/importer.scss`

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [PUG Template documentation](https://pugjs.org/api/getting-started.html)
+ [SASS Lang documentation](https://sass-lang.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info
+ Sails v1.2.3
