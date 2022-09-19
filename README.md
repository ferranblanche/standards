# Standards
This library provides ISO codes for:
- [639] Languages including 2-letter code, English and local names.

## Installation
It can be installed in whichever way you prefer, but I recommend NPM:
`npm install @ferranblanche/standards`

## Getting started
Import de Languages module:
```
import { Languages } from '@ferranblanche/standards'
const languages = new Languages;
```

### Validate ISO code
To validate a String is a valid ISO 639-2 code, run:
```
languages.contains(code: 'en')
// Returns true

languages.contains(code: 'es')
// Returns true

languages.contains(code: 'spanish')
// Returns false

languages.contains(code: 'xx')
// Returns false
```
