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
find . -name *.json -exec dotsunited-merge-json > ./merged.json {} \;
```

License
-------

Copyright (c) 2015 Dots United GmbH.
Released under the [MIT](LICENSE?raw=1) license.
