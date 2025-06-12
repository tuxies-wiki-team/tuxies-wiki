---
tags:
  - Contributions
title: Contribution Guidelines
createTime: 2025/06/09 11:25:08
permalink: /contributions/guidelines/
---

:::info This is a guideline for editing, styling, and formatting when editing Tuxie's Wiki. Please read and comply with these guidelines as it could jeopardize your opportunity in being a contributor.
:::

## Formatting choices

### File naming convention

We'll be using kebab-case to name files within the working directory.

:::note Examples

- kebab-case-is-the-best.txt
- tuxies-wiki.svg
- we-bare-bears.png
- become-a-contributor.md

:::

### Permalinks

Permalinks of articles should match the file name as well as possible.

:::info Examples
Gnome Guide @ `/docs/notes/linux-guides/gnome.md`

--> **/linux-guides/gnome/**

Terminal Customization (Bash) @ `/docs/guides/terminal-customization-bash.md`

--> **/guides/terminal-customization-bash/**
:::

### Code formatting

We're not strict with our code formatting as long as the output of your code is clean (i.e. the generated content is pretty).

We'd appreciate it if you use the Prettier extension in VS Code or an equivalent to format your code, though.

## Icons

We'll follow the following hierarchy for icons:

### Core website component

`mdi` >> `ic`

### Card

`fluent-emoji` >> `fluent-emojis` >> `devicon` >> `logos`

## Document components

### Callout container

If the content you will be putting in the `callout container` is relatively short, simply make it the title of the callout.

::::details See code...

```md
:::important This is an annoucement for everybody: I love Linux!
:::

:::tip Everybody loves some pro tips :\)
:::
```

::::

::::demo-wrapper

:::important This is an annoucement for everybody: I love Linux!
:::

:::tip Everybody loves some pro tips :\)
:::

::::

### Card & card grid

You can use `card` to serve as a decorative callout container. Use `card-grid` to indicate the author(s), maintainer(s), and contributor(s) of an article.

For what icons to use, refer to [icons section](guidelines.md#card).

:::::details See code...

```md
::::card-grid

:::card title="Demo card 1" icon="fluent-emoji-flat:card-index"
:::

:::card title="Demo card 2" icon="fluent-emoji-flat:card-index"
::::
```

:::::

:::::demo-wrapper

::::card-grid

:::card title="Demo card 1" icon="fluent-emoji-flat:card-index"
:::

:::card title="Demo card 2" icon="fluent-emoji-flat:card-index"
::::

:::::

### Code

Use `code` to indicate files, programs, and directories. Simply surround the text you want to "codify" with backticks (`).

:::details See code...

```md
`fzf` is a program that allows for fuzzy searching in the cli.
```

:::

:::demo-wrapper
`fzf` is a program that allows for fuzzy searching in the cli.
:::

### Code block

**Always** wrap code around `code block` for better legibility and styling consistency.

::::details See code...

````
```bash
# this is some example bash code
sudo dnf udate
```
````

::::

:::demo-wrapper

```bash
# this is some example bash code
sudo dnf udate
```

:::

### Code tabs

Use `code tabs` to:

- Indicate changes are made in a **specific file** (indicated by the file name). Check [Plume Theme Documentations](https://theme-plume.vuejs.press/guide/code/features/#%E4%BB%A3%E7%A0%81%E5%9D%97%E4%B8%AD%E7%9A%84%E9%A2%9C%E8%89%B2%E5%B7%AE%E5%BC%82) for details on code highlighting.
- To not use unnecessary space when displaying multiple files.

:::::details See code...

````MD
::::code-tabs

@tab Hello.java

```java
public class Hello {

  public static void main(string[] args) {

    Public.out.println("Hello world");
  }
}
```

@tab example.md

```md
---
author: aier
permalink: /testing/aier/
---

# Title text

Content text... Content text... Content text...

Content text...
```

::::
````

:::::

:::::demo-wrapper

::::code-tabs

@tab Hello.java

```java
public class Hello {

// [!code ++]
  public static void main(string[] args) {
// [!code ++]

// [!code ++]
    Public.out.println("Hello world");
// [!code ++]
  }
}
```

@tab example.md

```md
---
author: aier
permalink: /testing/aier/
---

# Title text

Content text... Content text... Content text...

Content text...
```

::::

:::::

### Demo wrapper

Use `demo wrapper` to show the product of something.

::::details See code...

```md
:::demo-wrapper
Content text...
:::
```

::::

:::demo-wrapper
Content text...
:::

::::details See code...

```md
:::demo-wrapper img
![Tuxie's Wiki](./assets/tuxies-wiki.png)
:::
```

:::::

:::demo-wrapper img
![Tuxie's Wiki](./assets/tuxies-wiki.png)
:::

### Details & collapse

Use `details` to collapse content that you don't want taking up a large amount of screen space.

::::details See code...

```md
:::details

The following is a picture of Ice Bear from We Bare Bears.
![Ice Bear](./assets/ice-bear.jpg)

:::
```

::::

::::demo-wrapper

:::details

The following is a picture of Ice Bear from We Bare Bears.
![Ice Bear](./assets/ice-bear.jpg)

:::

::::

When you have to use multiple `details` containers, use `collapse` instead.

Always pair `collapse` with a card unless the only content is a photo. If it has any text pair it with a card as such:

:::::details See code...

```md
::::collapse accordion

- Use a card for mixed media and sole text.

  :::card

  The following is a picture of Ice Bear from We Bare Bears.

  ![Ice Bear](./assets/ice-bear.jpg)

  :::

- Card can be omitted in the case of a singular image.

  ![Ice Bear](./assets/ice-bear.jpg)

::::
```

:::::

:::::demo-wrapper

::::collapse accordion

- Use a card for mixed media and sole text.

  :::card

  The following is a picture of Ice Bear from We Bare Bears.

  ![Ice Bear](./assets/ice-bear.jpg)

  :::

- Card can be omitted in the case of a singular image.

  ![Ice Bear](./assets/ice-bear.jpg)

::::

:::::

### Steps

Use "-" to auto-generate `steps` instead of manually numbering them. It helps maintenance and editing much easier.

Keep the keywords of your step titles bold. If the step title is relatively short, make the entire title bold for better distinction from content text.

:::::details See code...

```md
:::steps

- **This is a step**

  Content...

- **This is another step**

  This is even more content...

- **This is yet another step**

  This is yet even more content...

:::
```

:::::

::::demo-wrapper

:::steps

- **This is a step**

  Content...

- **This is another step**

  This is even more content...

- **This is yet another step**

  This is yet even more content...

:::

::::

### Tabs

Use `tabs` for showing multiple options to not use up unnecessary space.

:::::details See code...

````md
:::tabs

@tab Ubuntu/Debian

```bash
sudo apt install timeshift
```

@tab Fedora

```bash
sudo dnf install timeshift
```

@tab Arch

```bash
pacman -S timeshift
```

:::
````

:::::

:::::demo-wrapper

:::tabs

@tab Ubuntu/Debian

```bash
sudo apt install timeshift
```

@tab Fedora

```bash
sudo dnf install timeshift
```

@tab Arch

```bash
pacman -S timeshift
```

:::

:::::
