# [fcrypt](https://github.com/warren-bank/node-fcrypt)
#### fork of [fcrypt _v1.1.1_](https://github.com/lidebug/fcrypt)

Encryption and decryption files and folders.

#### Install
```javascript
npm i "@warren-bank/fcrypt" --save-dev
```

#### Node.js
```javascript
var fcrypt = require("@warren-bank/fcrypt");
```

#### Encrypt
```javascript
fcrypt.encrypt({
  key: "mySuperPass1337",
  input: "./src/private",
  output: "./src/dest/private.data",
  callback: (errors) => {
    if (errors.exists) {
      errors.console();
      return;
    }
    console.log("encrypted");
  }
});
```

#### Decrypt
```javascript
fcrypt.decrypt({
  key: "mySuperPass1337",
  input: "./src/dest/private.data",
  output: "./src/output",
  callback: (errors) => {
    if (errors.exists) {
      errors.console();
      return;
    }
    console.log("decrypted");
  }
});
```

#### Extra
You could change default crypto method
```javascript
fcrypt.encrypt({
  key: "mySuperPass1337",
  input: "./private",
  output: "./dest/private.data",
  method: "aes192", // <-- The one
  callback: () => {
    console.log("encrypted");
  }
});
```
Same thing in decrypt()
