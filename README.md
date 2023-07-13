<div align="center">
  <h1>
    <br/>
    🗒️
    <br />
    pform-reset
    <br />
    <br />
  </h1>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/pform-reset?style=for-the-badge">
       <img src="https://img.shields.io/npm/v/pform-reset.svg?style=for-the-badge" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/pform-reset?style=for-the-badge">
      <img src="https://img.shields.io/npm/dw/pform-reset.svg?style=for-the-badge" alt="npm  downloads" />
    </a>
<a>
    <img alt="NPM" src="https://img.shields.io/npm/l/pform-reset?style=for-the-badge">
</a>

<a>
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/anubra266/pform-reset?logo=github&style=for-the-badge">
</a>
    <br />
    <br />
  <sup>
Reset for form styles in CSS Panda
  </sup>
  <br />
  <br />

</div>

## About

An opinionated form reset designed to make form elements easy to style in
[CSS Panda](https://github.com/chakra-ui/panda). 'Twas Inspired by
[@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)

## Install

```sh
npm i -D pform-reset
```

## Configuration

You can just add `pform-reset` to the `presets` key in your `panda.config.*` file.

```ts
export default defineConfig({
  presets: [
    // ...
    'pform-reset',
  ],
})
```

Then make sure your `globalCss` and utilities are extendable, if you are using them in your config.

```js
// panda.config.*
export default defineConfig({
  //...
  utilities: {
    extend: {
      // ...
    },
  },
  globalCss: {
    extend: {
      // ...
    },
  },
})
```

### Usage

All of the basic form elements you use will now have some simple default styles that are easy to override with
utilities.

Currently we add basic utility-friendly form styles for the following form element types:

- `input[type='text']`
- `input[type='password']`
- `input[type='email']`
- `input[type='number']`
- `input[type='url']`
- `input[type='date']`
- `input[type='datetime-local']`
- `input[type='month']`
- `input[type='week']`
- `input[type='time']`
- `input[type='search']`
- `input[type='tel']`
- `input[type='checkbox']`
- `input[type='radio']`
- `select`
- `select[multiple]`
- `textarea`

**Note that for text inputs, you must add the `type="text"` attribute for these styles to take effect when using global
styles.** This is a necessary trade-off to avoid relying on the overly greedy `input` selector and unintentionally
styling elements we don't have solutions for yet, like `input[type="range"]` for example.

Every element has been normalized/reset to a simple visually consistent style that is easy to customize with utilities,
even elements like `<select>` or `<input type="checkbox">` that normally need to be reset with `appearance: none` and
customized using custom CSS:

```js
function App() {
  return (
    <div>
      <select
        className={css({
          /* You can actually customize padding on a select element now: */
          px: '4',
          py: '3',
          rounded: 'full',
        })}
      >
        ...
      </select>

      <input
        type="checkbox"
        className={css({
          /* Or change a checkbox color using text color utilities: */
          rounded: 'md',
          color: 'pink.500',
        })}
      />
    </div>
  )
}
```

### Strategy

By default, this package generates both global styles and utility styles for your project.

Global styles ensures that all neccessary inputs are styled by default, while utility styles allow you to apply input
styles individually,

it's mostly used when you want to apply input styles to an element that's not an input.

You can specify if you want to generate only `global` or `utility` styles. Both are generated when you don't specify
anything.

To do this export the `pformPreset` method instead of passing a string to presets, and set `strategy` to `base` or
`utility`.

```ts
export default defineConfig({
  presets: [
    // ...
    pformReset({
      strategy: 'base', // only generate global styles
      strategy: 'utility', // only generate utility properties
    }),
  ],
})
```

You can use utility properties as follows:

```js
return (
  <div
    className={css({
      'form-input': true,
    })}
  >
    This div will look like an input
  </div>
)
```

When using the base strategy, form elements are styled globally, and no form-{name} utility properties are generated.

When using the utility strategy, form elements are not styled globally, and instead must be styled using the generated
form-{name} utility properties.

Here is a complete table of the provided `form-*` utility properties for reference:

| Base                      | Class              |
| ------------------------- | ------------------ |
| `[type='text']`           | `form-input`       |
| `[type='email']`          | `form-input`       |
| `[type='url']`            | `form-input`       |
| `[type='password']`       | `form-input`       |
| `[type='number']`         | `form-input`       |
| `[type='date']`           | `form-input`       |
| `[type='datetime-local']` | `form-input`       |
| `[type='month']`          | `form-input`       |
| `[type='search']`         | `form-input`       |
| `[type='tel']`            | `form-input`       |
| `[type='time']`           | `form-input`       |
| `[type='week']`           | `form-input`       |
| `textarea`                | `form-textarea`    |
| `select`                  | `form-select`      |
| `select[multiple]`        | `form-multiselect` |
| `[type='checkbox']`       | `form-checkbox`    |
| `[type='radio']`          | `form-radio`       |


## Sponsors ✨

Thanks goes to these wonderful people

<p align="center">
  <a href="https://patreon.com/anubra266?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link">
    <img src='https://cdn.jsdelivr.net/gh/anubra266/static@main/sponsors.svg'/>
  </a>
</p>
