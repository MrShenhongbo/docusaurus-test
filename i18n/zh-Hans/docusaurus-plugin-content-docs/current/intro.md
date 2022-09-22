---
sidebar_position: 1
---

# 教程介绍

让我们在 **不到 5 分钟的时间内** 了解 Docusaurus。

## 入门

通过 **创建一个新站点** 开始。

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### 你需要什么

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - 安装 Node.js 时，建议勾选所有依赖相关的复选框。

## 生成新站点

使用 **classic 模板** 生成新的 Docusaurus 站点。

运行命令后，**classic 模板** 将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以将此命令键入 Command Prompt、Powershell、Terminal 或代码编辑器的任何其他集成终端。

该命令还会安装运行 Docusaurus 所需的所有必要依赖项。

## 启动您的网站

运行开发服务器：

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
