import { Rule } from './types'
import svgToDataUri from 'mini-svg-data-uri'

const inputSvgStroke = '#6b7280'

export const rules: Rule[] = [
  {
    base: [
      "[type='text']",
      "[type='email']",
      "[type='url']",
      "[type='password']",
      "[type='number']",
      "[type='date']",
      "[type='datetime-local']",
      "[type='month']",
      "[type='search']",
      "[type='tel']",
      "[type='time']",
      "[type='week']",
      '[multiple]',
      'textarea',
      'select',
    ],
    utility: ['form-input', 'form-textarea', 'form-select', 'form-multiselect'],
    styles: {
      appearance: 'none',
      backgroundColor: '#fff',
      borderColor: 'gray.500',
      borderWidth: '1px',
      borderRadius: '0px',
      paddingTop: '0.5rem',
      paddingRight: '0.75rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0.75rem',
      fontSize: '1rem',
      lineHeight: '1.5',
      '--panda-shadow': '0 0 #0000',
      '&:focus': {
        outline: '2px solid transparent',
        'outline-offset': '2px',
        '--panda-ring-inset': 'var(--panda-empty,/*!*/ /*!*/)',
        '--panda-ring-offset-width': '0px',
        '--panda-ring-offsetColor': '#fff',
        '--panda-ringColor': 'colors.blue.600',
        '--panda-ring-offset-shadow': `var(--panda-ring-inset) 0 0 0 var(--panda-ring-offset-width) var(--panda-ring-offsetColor)`,
        '--panda-ring-shadow': `var(--panda-ring-inset) 0 0 0 calc(1px + var(--panda-ring-offset-width)) var(--panda-ringColor)`,
        'box-shadow': `var(--panda-ring-offset-shadow), var(--panda-ring-shadow), var(--panda-shadow)`,
        borderColor: 'blue.600',
      },
    },
  },

  {
    base: ['input::placeholder', 'textarea::placeholder'],
    utility: ['form-input::placeholder', 'form-textarea::placeholder'],
    styles: {
      color: 'gray.500',
      opacity: '1',
    },
  },
  {
    base: ['::-webkit-datetime-edit-fields-wrapper'],
    utility: ['form-input::-webkit-datetime-edit-fields-wrapper'],
    styles: {
      padding: '0',
    },
  },
  {
    // Unfortunate hack until https://bugs.webkit.org/show_bug.cgi?id=198959 is fixed.
    // This sucks because users can't change line-height with a utility on date inputs now.
    // Reference: https://github.com/twbs/bootstrap/pull/31993
    base: ['::-webkit-date-and-time-value'],
    utility: ['form-input::-webkit-date-and-time-value'],
    styles: {
      minHeight: '1.5em',
    },
  },
  {
    // In Safari on macOS date time inputs are 4px taller than normal inputs
    // This is because there is extra padding on the datetime-edit and datetime-edit-{part}-field pseudo elements
    // See https://github.com/tailwindlabs/tailwindcss-forms/issues/95
    base: [
      '::-webkit-datetime-edit',
      '::-webkit-datetime-edit-year-field',
      '::-webkit-datetime-edit-month-field',
      '::-webkit-datetime-edit-day-field',
      '::-webkit-datetime-edit-hour-field',
      '::-webkit-datetime-edit-minute-field',
      '::-webkit-datetime-edit-second-field',
      '::-webkit-datetime-edit-millisecond-field',
      '::-webkit-datetime-edit-meridiem-field',
    ],
    utility: [
      'form-input::-webkit-datetime-edit',
      'form-input::-webkit-datetime-edit-year-field',
      'form-input::-webkit-datetime-edit-month-field',
      'form-input::-webkit-datetime-edit-day-field',
      'form-input::-webkit-datetime-edit-hour-field',
      'form-input::-webkit-datetime-edit-minute-field',
      'form-input::-webkit-datetime-edit-second-field',
      'form-input::-webkit-datetime-edit-millisecond-field',
      'form-input::-webkit-datetime-edit-meridiem-field',
    ],
    styles: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  {
    base: ['select'],
    utility: ['form-select'],
    styles: {
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="${inputSvgStroke}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`,
      )}")`,
      backgroundPosition: `right 0.5rem center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `1.5em 1.5em`,
      paddingRight: '2.5rem',
      printColorAdjust: `exact`,
    },
  },
  {
    base: ['[multiple]', '[size]:where(select:not([size="1"]))'],
    utility: ['form-select:where([size]:not([size="1"]))'],
    styles: {
      backgroundImage: 'initial',
      backgroundPosition: 'initial',
      backgroundRepeat: 'unset',
      backgroundSize: 'initial',
      paddingRight: '0.75rem',
      printColorAdjust: 'unset',
    },
  },
  {
    base: [`[type='checkbox']`, `[type='radio']`],
    utility: ['form-checkbox', 'form-radio'],
    styles: {
      appearance: 'none',
      padding: '0',
      printColorAdjust: 'exact',
      display: 'inline-block',
      verticalAlign: 'middle',
      backgroundOrigin: 'border-box',
      userSelect: 'none',
      flexShrink: '0',
      height: '1rem',
      width: '1rem',
      color: 'blue.600',
      backgroundColor: '#fff',
      borderColor: 'gray.500',
      borderWidth: '1px',
      '--panda-shadow': '0 0 #0000',
    },
  },
  {
    base: [`[type='checkbox']`],
    utility: ['form-checkbox'],
    styles: {
      borderRadius: '0px',
    },
  },
  {
    base: [`[type='radio']`],
    utility: ['form-radio'],
    styles: {
      borderRadius: '100%',
    },
  },
  {
    base: [`[type='checkbox']:focus`, `[type='radio']:focus`],
    utility: ['form-checkbox:focus', 'form-radio:focus'],
    styles: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      '--panda-ring-inset': 'var(--panda-empty,/*!*/ /*!*/)',
      '--panda-ring-offset-width': '2px',
      '--panda-ring-offsetColor': '#fff',
      '--panda-ringColor': 'colors.blue.600',
      '--panda-ring-offset-shadow': `var(--panda-ring-inset) 0 0 0 var(--panda-ring-offset-width) var(--panda-ring-offsetColor)`,
      '--panda-ring-shadow': `var(--panda-ring-inset) 0 0 0 calc(2px + var(--panda-ring-offset-width)) var(--panda-ringColor)`,
      boxShadow: `var(--panda-ring-offset-shadow), var(--panda-ring-shadow), var(--panda-shadow)`,
    },
  },
  {
    base: [`[type='checkbox']:checked`, `[type='radio']:checked`],
    utility: ['form-checkbox:checked', 'form-radio:checked'],
    styles: {
      borderColor: `transparent`,
      backgroundColor: `currentColor`,
      backgroundSize: `100% 100%`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
    },
  },

  {
    base: [`[type='checkbox']:checked`],
    utility: ['form-checkbox:checked'],
    styles: {
      backgroundImage: `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`,
      )}")`,
    },
  },
  {
    base: [`[type='radio']:checked`],
    utility: ['form-radio:checked'],
    styles: {
      backgroundImage: `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
      )}")`,
    },
  },
  {
    base: [
      `[type='checkbox']:checked:hover`,
      `[type='checkbox']:checked:focus`,
      `[type='radio']:checked:hover`,
      `[type='radio']:checked:focus`,
    ],
    utility: [
      'form-checkbox:checked:hover',
      'form-checkbox:checked:focus',
      'form-radio:checked:hover',
      'form-radio:checked:focus',
    ],
    styles: {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
  },

  {
    base: [`[type='checkbox']:indeterminate`],
    utility: ['form-checkbox:indeterminate'],
    styles: {
      backgroundImage: `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`,
      )}")`,
      borderColor: `transparent`,
      backgroundColor: `currentColor`,
      backgroundSize: `100% 100%`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
    },
  },
  {
    base: [`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`],
    utility: ['form-checkbox:indeterminate:hover', 'form-checkbox:indeterminate:focus'],
    styles: {
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
    },
  },
  {
    base: [`[type='file']`],
    utility: null,
    styles: {
      background: 'unset',
      borderColor: 'inherit',
      borderWidth: '0',
      borderRadius: '0',
      padding: '0',
      fontSize: 'unset',
      lineHeight: 'inherit',
    },
  },
  {
    base: [`[type='file']:focus`],
    utility: null,
    styles: {
      outline: [`1px solid ButtonText`, `1px auto -webkit-focus-ringColor`],
    },
  },
]
