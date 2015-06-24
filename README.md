dotsunited-merge-json
=====================

Simple command line utility for merging json files.

Installation
------------

```bash
npm install dotsunited-merge-json -g
```

Usage
-----

```bash
dotsunited-merge-json file1.json file2.json > merged.json
```

```bash
find . -name "*.json" -exec dotsunited-merge-json > ./merged.json {} \;
```

Pretty-print json with [jq](http://stedolan.github.io/jq/):

```bash
find . -name "*.json" -print0 | xargs -0 dotsunited-merge-json | jq .
```

License
-------

Copyright (c) 2015 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
