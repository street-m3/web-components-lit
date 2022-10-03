import { css } from 'lit';

export default css`
*,
::before,
::after {
    box-sizing: border-box;
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
a,
p,
span,
em,
small,
strong,
sub,
sup,
mark,
del,
ins,
strike,
abbr,
dfn,
blockquote,
q,
cite,
code,
pre,
ol,
ul,
li,
dl,
dt,
dd,
div,
section,
article,
main,
aside,
nav,
header,
hgroup,
footer,
img,
figure,
figcaption,
address,
time,
audio,
video,
canvas,
iframe,
details,
summary,
fieldset,
form,
label,
input,
textarea,
select,
button,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
    border: 0;
    margin: 0;
    padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
    display: block;
}

/**
 *
 * anchor 
 *
 */

a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    vertical-align: baseline;
}

a:link,
a:visited,
a:hover,
a:active {
    text-decoration: none;
}

a:active,
a:hover {
    outline-width: 0;
}

/**
 *
 * abbr
 *
 */

abbr[title],
dfn[title] {
    border-bottom: 1px dotted;
    cursor: help;
}

/**
 *
 * blockquote
 *
 */

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

/**
 *
 * button
 *
 */

button {
    appearance: none;
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
}

/**
 *
 * del
 *
 */

del {
    text-decoration: line-through;
}

/**
 *
 * heddings
 *
 */

h1,
h2,
h3,
h4,
h5,
h6 {
    color: inherit;
    display: block;
    font-size: 100%;
    font-weight: bold;
    font-family: inherit;
    line-height: 1.2em;
    margin-top: 0;
}

h1,
.u-h1 {
    font-size: 2.5rem;
}

h2,
.u-h2 {
    font-size: 2rem;
}

h3,
.u-h3 {
    font-size: 1.75rem;
}

h4,
.u-h4 {
    font-size: 1.5rem;
}

h5,
.u-h5 {
    font-size: 1.25rem;
}

h6,
.u-h6 {
    font-size: 1rem;
}

/**
 *
 * hr, italic, pre, code
 *
 */

hr {
    border-top: 1px solid #cccccc;
    display: block;
    height: 1px;
    margin: 1em 0;
    padding: 0;
}

/**
 * 日本語では斜体を使用しないためリセット
 */
i,
cite,
em,
address,
dfn {
    font-style: normal;
}

pre {
    width: 100%;
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
}

code {
    position: relative;
    display: block;
    color: #fff;
}

/**
 *
 * img
 *
 */

img {
    border: none;
    border-style: none;
    height: auto;
    max-height: 100%;
    vertical-align: top;
}

img,
video {
    max-width: 100%;
}

/**
 *
 * input
 *
 */

input,
select,
textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    background-image: none;
    border: none;
    border-radius: 0;
    color: inherit;
    font: inherit;
}

input[type='text'],
input[type='search'],
input[type='tel'],
input[type='url'],
input[type='email'],
input[type='password'],
input[type='date'],
input[type='datetime'],
input[type='month'],
input[type='week'],
input[type='time'],
input[type='number'],
input[type='submit'],
input[type='button'] {
    max-width: 100%;
}

input:focus,
textarea:focus {
    box-shadow: none;
}

input[type='radio']:checked+label {
    background-color: #ff0000;
}

input[type='submit'] {
    text-decoration: none;
}

input[type='submit'],
input[type='button'],
label,
select {
    cursor: pointer;
}

select::-ms-expand {
    display: none;
}

textarea {
    resize: none;
}

/**
 *
 * ins
 *
 */

ins {
    background-color: #ffff99;
    color: #000000;
    text-decoration: none;
}

/**
 *
 * list
 *
 */

li,
ol {
    list-style: none;
    list-style-type: none;
}

/**
 *
 * legend
 *
 */

legend {
    color: #000000;
}

/**
 *
 * mark
 *
 */

mark {
    background-color: #ffff99;
    color: #000000;
    font-style: italic;
    font-weight: bold;
}

/**
 *
 * table
 *
 */

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/**
 *
 * attribute
 *
 */

[hidden] {
    display: none !important;
}

[disabled] {
    cursor: not-allowed;
}

[hover] {
    border: none;
    outline: none;
}

[inert] {
    cursor: default;
    pointer-events: none;
}

[inert],
[inert] * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
`