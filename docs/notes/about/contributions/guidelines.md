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

Permalinks should match the file name as best as possible.

File naming convention: kebab-case-is-the-best

## Aesthetic choices

### Icons

Core website components — mdi

Cards — fluent-color, fluent-emoji, devicon, logos

### Collapse

Always pair `collapse` with a card unless the only content is a photo. If it has any text pair it with a card as such:

```md
:::::collapse

- Title

  ::::card

  Content...

  ::::

:::::
```

::::::demo-wrapper

:::::collapse

- Use a card for mixed media and sole text.

  ::::card

  The following is a picture of Ice Bear from We Bare Bears.

  ![Ice Bear](./assets/ice-bear.jpg)

  ::::

:::::

:::::collapse

- Card can be omitted in the case of a **singular** image.

  ![Ice Bear](./assets/ice-bear.jpg)

::::::
