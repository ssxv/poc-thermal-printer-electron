Setup for node-gyp
https://github.com/nodejs/node-gyp?tab=readme-ov-file#on-windows

```
// This is not installed by default with python, required for electron-rebuild
C:\Users\satyendras\AppData\Local\Programs\Python\Python312\python.exe  -m pip install setuptools

npm i

npx electron-rebuild --python=C:\Users\satyendras\AppData\Local\Programs\Python\Python312\python

npm start
```