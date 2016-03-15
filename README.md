# Sked-JS
JavaScript supplement to the [Sked PHP calendar library](https://github.com/CampusUnion/Sked).

## Installation

Download `sked.js` and put it in a public folder on your website.

**Sked-JS** requires jQuery, so be sure to load both on your page:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://mysite.com/js/sked.js"></script>
```

Better yet, use a dependency loader like [RequireJS](http://requirejs.org/):

_require.config.js_
```js
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
        'sked': 'path/to/sked.js',
        // ...
    },
    shim: {
        'sked': {
            deps: ['jquery'],
            exports: 'skedJsLoaded'
        },
        // ...
    }
```

_main.js_
```js
require([..., 'sked', ...], function(){
    // do your thing here
});
```

## Usage

**Sked-JS** automatically finds your `.sked-form` and adds some UI sugar, like
pluralizing intervals - day(s), week(s), and month(s) - and hiding the weekday
checkboxes when the "day(s)" interval is selected (if your event is every 3 days,
it doesn't make sense to select "Monday").
