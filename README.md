# [fcrypt](https://github.com/warren-bank/node-fcrypt)
#### fork of [fcrypt _v1.1.1_](https://github.com/lidebug/fcrypt)

Library to store an input directory to an encrypted .zip file, and decrypt and extract an input encrypted .zip file to a directory.

#### Install
```javascript
npm i "@warren-bank/fcrypt" --save
```

#### Node.js
```javascript
var fcrypt = require("@warren-bank/fcrypt");
```

#### Encrypt
```javascript
fcrypt.encrypt({
  key:    "mySuperPass1337",
  input:  "./src/private",
  output: "./dst/encrypted.zip.data",
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
  key:    "mySuperPass1337",
  input:  "./dst/encrypted.zip.data",
  output: "./dst/decrypted.zip",
  callback: (errors) => {
    if (errors.exists) {
      errors.console();
      return;
    }
    console.log("decrypted");
  }
});
```

#### Decrypt and Extract
```javascript
fcrypt.extract({
  key:    "mySuperPass1337",
  input:  "./dst/encrypted.zip.data",
  output: "./dst/decrypted",
  callback: (errors) => {
    if (errors.exists) {
      errors.console();
      return;
    }
    console.log("extracted");
  }
});
```

#### Extra
You could change default crypto method
```javascript
fcrypt.encrypt({
  method: "aes192", // HERE
  key:    "mySuperPass1337",
  input:  "./src/private",
  output: "./dst/encrypted.zip.data",
  callback: (errors) => {
    if (errors.exists) {
      errors.console();
      return;
    }
    console.log("encrypted");
  }
});
```

Same `method` parameter works for `decrypt()` and `extract()`.
