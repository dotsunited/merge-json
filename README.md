dotsunited-merge-json
=====================

Simple command line utility for merging JSON files.

Installation
------------

```bash
npm install dotsunited-merge-json -g
```

Usage
-----

Merge JSON files provided as arguments:

```bash
dotsunited-merge-json file1.json file2.json > merged.json
```

Merge all JSON files in the current directory:

```bash
find . -name "*.json" -exec dotsunited-merge-json > ./merged.json {} \;
```

Pretty-print JSON with [jq](https://stedolan.github.io/jq/):

```bash
find . -name "*.json" -print0 | xargs -0 dotsunited-merge-json | jq .
```

License
-------

Copyright (c) 2015-2016 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
