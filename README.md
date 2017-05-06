# parse-server-boilerplate #

## Usage ##

TODO:

## Static Analysis ##

You can run static analysis on the code to get a visual output of the complexity
and any potential problems that the linter on a development machine may have
missed. [plato](https://github.com/es-analysis/plato) is the current static
analysis tool. It will install with the other dependencies using `npm install`.

To run the static analysis execute:

```shell
npm run-script lint
```

The results will generate in the `static_analysis` directory as formatted HTML.
Open `index.html` in your web browser to look at the results of the analysis.

## Inlining E-mail templates ##

Changing e-mail templates requires re inlining the files. This embeds the CSS
and removes the white space to produce a more machine friendly version of the
document for sending. The script to inline the email templates is in the
[package.json](package.json) file. It uses the command line tool
[inliner](https://github.com/remy/inliner). It will install with the other
dependencies using `npm install`.

```shell
npm run-script inline
```

## Documentation Generation ##

To generate a website with the project's documentation execute:

```shell
npm run-script doc
```
