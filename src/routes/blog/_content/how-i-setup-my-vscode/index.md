---
title: How I Setup My vscode
slug: how-i-setup-my-vscode
date: "2019-01-31T14:33:10.059Z"
gitrepo: "https://github.com/masbossun/bossun-blog/blob/master/content/blog/how-i-setup-my-vscode/index.md"
---

Visual Studio Code is my favorite code editor right now. I always use it for writing code. I have been using vscode for almost 3 years. At my usage, i setup this code editor for developing JavaScript. For someone who do not know what vscode is, here is a paragraph from it's [website](https://code.visualstudio.com/docs).

> Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).

---

The main reason i choose vscode as my main code editor is because of it's popularity. Many developers are use vscode and they have their own setup or configuration for their usage. And then i tried and i love it. I have been using many code editor before like sublime, notepad++, and atom. But, i think the best fit for me are vscode.

As i said before, i am using vscode for developing javascript, especially for React and React Native. On my previous post on this blog, i wrote my environment in vscode, and here i will explain more about them.

## The Extensions

Vscode are able to install extension or plugin as a tools for development. There is a lot of extension built by the community or vscode itself. My installed extension for general development are :

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag), this extension are used for auto renaming the tag, it useful when you change the start tag, and the end tag will changed too.

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), this extension are used for auto closing the tag, it useful when you write a start tag and when you want to write the end tag, it will automatically written.
- [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.bookmarks), like it's name this extension are used for bookmarking a line of code.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), this extension are used for checking the spelling on our code. i am not really good at english and this extension helped me a lot.
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight), when you are coding some css ,or styling script, or anything contains color-hex code. this extension will highlight the hex-code or color-code with the color itself.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), this extension are used for checking the history of our code using git.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), this is my favorite extension for now. Prettier can format our code with our own configuration, so the codebase will well-formated and more consistent. I am usually pair this extension with husky to do the format for all of our source code before we are going to commit it to git.
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets), this extension are used to stress the bracket with different colors, so we can point the pair of bracket clearly.
- [SVG Viewer](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer), this extension are used to view the svg file.
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight), last but not least. this extensions are used to highlight the `//TODO:` comment.

Those are pretty mainstream extensions to make coding more easier.

## My Configuration

vscode are allowed us to change the settings or the configuration. To fit my needs i change some settings and these are my settings on my vscode. you can change the json file using `ctrl+p` then find `>json` and choose `Preferences: Open Settings (JSON)`

```json
{
  "workbench.colorTheme": "Panda Syntax",
  "workbench.iconTheme": "vscode-icons",
  "workbench.startupEditor": "newUntitledFile",
  "window.menuBarVisibility": "toggle",
  "window.titleBarStyle": "native",
  "window.zoomLevel": 0,
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [100],
  "editor.cursorBlinking": "solid",
  "editor.lineHeight": 22,
  "editor.fontFamily": "FuraCode Nerd Font",
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "javascript.validate.enable": false,
  "prettier.eslintIntegration": true,
  "flow.useNPMPackagedFlow": true,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node-modules/**": true
  }
}
```

<br/>
I think that is all of my setup, i hope it can be useful for someone. Thanks.
