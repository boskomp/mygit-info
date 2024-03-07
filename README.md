## Installation

You can install this package via npm:

```
npm install mygit-info
```

## Usage

```
const getUser = require('mygit-info');

(async () => {
    const username = 'octocat'; // your github username

    try {
        const user = await getUser(username);
        console.log(`Username: ${user.login}`);
        console.log(`Name: ${user.name}`);
        console.log(`Followers: ${user.followers}`);
        console.log(`Following: ${user.following}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
```
