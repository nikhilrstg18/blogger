<h1 align="center">
    Blogger
</h1>

<h4 align="center">
  A constantly evolving and thoughtful architecture for creating new static blogs.
</h4>

## Table of contents

- [Table of contents](#table-of-contents)
- [Features](#features)
- [Quick Start](#quick-start)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [License](#license)

## Features

- Beautiful typography.
- Mobile first approach in development.
- Syntax highlighting in code blocks using PrismJS.
- Pagination support.

## Quick Start

```
$ npm install
$ npm run start
```

## Folder Structure

```
.
├── internal
│   ├── definitions
│   ├── gatsby
│   │   ├── constants
│   │   ├── queries
│   │   ├── types
│   │   └── utils
│   └── testing
│       └── __mocks__
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Image
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── hooks
    ├── templates
    │   ├── CategoriesTemplate
    │   ├── CategoryTemplate
    │   ├── IndexTemplate
    │   ├── NotFoundTemplate
    │   ├── PageTemplate
    │   ├── PostTemplate
    │   ├── TagsTemplate
    │   └── TagTemplate
    ├── types
    └── utils
```

## Deployment

[View More](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

## License

The MIT License (MIT)

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
