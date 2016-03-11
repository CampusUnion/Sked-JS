# Sked-JS
JavaScript supplement to the [Sked PHP calendar library](https://github.com/CampusUnion/Sked-JS).

## Installation

Download sked.js and put it in a public folder on your website.

Sked-JS requires jQuery, so make sure you load both on your page:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://mysite.com/js/sked.js"></script>
```

Better yet, use a dependency loader like [RequireJS](http://requirejs.org/):

require.config.js
```js
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        'sked': 'path/to/sked.js',
        // ...
    },
    shim: {
        'sked': {
            'deps': ['jquery']
        },
        // ...
    }
```

## Usage

Sked-JS automatically finds your `.sked-form` and adds some UI sugar, like
pluralizing intervals (day(s), week(s), and month(s)) and hiding the weekday
checkboxes when the "day(s)" interval is selected (if your event is every 3 days,
it doesn't make sense to select "Monday").
