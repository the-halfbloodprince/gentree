# Tree Generator

This is a simple application which creates a tree of your files and folders and saves them into a text.txt file and a structure.md file.

#### <u>Usage</u>:

simply run `npx gentree <name of folder>`
eg: `npx gentree .`, `npx gentree lib`, `npx gentree src`.


## or

#### <u>Installation</u>:
1. make sure you have node and npm installed.
1. run `npm i -g gentree`.

#### <u>Usage</u>:
1. run `gentree <name of the folder>`
eg: `gentree .`, `gentree lib`, `gentree src`.

#### <u>Ignoring files and folders</u>:
Add a .gentreeignore file in the directory you're calling it from with a list of files and folders you want to ignore at each line.
eg:
```
node_modules/
.a_fun_file.txt
```

*IMPORTANT BUG: Count of files and folders in final output also includes files in .gentreeignore*

**Happy Debugging!**