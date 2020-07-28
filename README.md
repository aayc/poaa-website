# Per Origami Ad Astra website

## Installation
Installation instructions are given for Mac OSX.

### Prerequisites
Install the latest version of Node.js, preferably through NVM:
```
brew install nvm # or equivalent in chocolatey, apt-get, pacman, etc.
nvm install node
```

Install the Gatsby CLI:
```
npm install -g gatsby-cli
```

### Developing the Per Origami Ad Astra website
Clone the repository
```
git clone https://github.com/aayc/poaa-website
```

Change directory to the repository and install dependencies
```
cd poaa-website
npm install
```

Launch the development server using Gatsby.
```
gatsby develop
```

Any changes you make to the website files while the server is running will show in localhost:8000

### Building
When ready to build and serve, run this command in the root of the repository.
```
gatsby build
```

### Publishing
This project will be hosted on Netlify, therefore pushing code to the `master` branch will update the website within 10 minutes.

