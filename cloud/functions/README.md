# Functions #

This folder holds cloud functions for the server. Each files main export should
be a function bearing the signature:

```javascript
module.exports = function foo(request, response)
{
    response.succes('bar');
};
```

The index will automatically register this function as a cloud function bearing
the name of the file (minus the `.js` extension) as its cloud function name.
i.e. a file called `foo.js` will be registered with the cloud function name
`"foo"`.

# Globals #

Modules in helpers and pfobjects are automatically required as global for the
files in this directory. i.e. they don't need imported or required to be used.
