# csstic

Csstic это __css-in-js__ библиотека. В своем роде попытка сделать css-in-js для нативного js без привязки к [react](). Она очень похожа на [styled-components]() (был вдохновлен их подходом), метод `css` был специально взят, чтобы уже была подсветка синтаксиса.

## Мотивация

- Можно использовать для нативного js
- Можно адаптировать под разные фреймворки
- Есть SSR

## Установка

```sh
npm install csstic
```

## Примеры

### Нативный js

```ts
import { createState, createCss } from "csstic";

const css = createCss({ state: createState() });

const styleInput = css`
  border: 2px solid black;
  outline: none;
`;

const input = document.createElement('input');

input.classList.add(styleInput.className);
```

### Нативный js [attach]

```ts
import { createState, createCss } from "csstic";
import { attach } from "csstic/native";

const css = createCss({ state: createState() });

const styleInput = css`
  border: 2px solid black;
  outline: none;
`;

const input = document.createElement('input');
const changeStyleName = attach(input, styleInput);
const onChange = () => changeStyleName(css`
  border-color: ${input.value};
`);

input.addEventListener("input", onChange);
```

### React [useClassName]

```ts
import React from "react";
import { createState, createCss } from "csstic";
import { useClassName } from "csstic/react";

const css = createCss({ state: createState() });

const styleInput = css`
  border: 2px solid black;
  outline: none;
`;

const Input = () => {
  const className = useClassName(styleInput);
  const change = (event) => className.change(css`
    border-color: ${event.target.value};
  `);

  return <input className={className()} onChange={change} />;
};
```

### React [useAttachRef]

```ts
import React from "react";
import { createState, createCss } from "csstic";
import { useClassName } from "csstic/react";

const css = createCss({ state: createState() });

const styleInput = css`
  border: 2px solid black;
  outline: none;
`;

const Input = () => {
  const ref = useAttachRef<HTMLInputElement>(styleInput);
  const change = () => ref.changeStyle(css`
    border-color: ${event.target.value};
  `);

  return <input ref={ref} onChange={change} />;
};
```
