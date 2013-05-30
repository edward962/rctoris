rctoris Build Setup
===================

[Grunt](http://gruntjs.com/) is used for building.

### Install Grunt and its Dependencies

#### Ubuntu

 1. Install Node.js and its package manager, NPM
   * `sudo apt-get install python-software-properties`
   * `sudo add-apt-repository ppa:chris-lea/node.js`
   * `sudo apt-get update && sudo apt-get install nodejs`
 2. Install Grunt
   * `sudo npm install -g grunt-cli`
   * `sudo rm -rf ~/.npm ~/tmp`
 3. Install the Grunt tasks specific to this project
   * `cd /path/to/rctoris/utils/`
   * `npm install .`

### Build with Grunt

Before proceeding, please confirm you have installed the dependencies above.

To run the build tasks:

 1. `cd /path/to/rctoris/utils/`
 2. `grunt build`

`grunt build` will minimize the files under src and place everything into the build directory.
