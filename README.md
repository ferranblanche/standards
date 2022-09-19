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
Validate a String is a valid ISO 639-2 code:
```
languages.contains('en')
// true

languages.contains('es')
// true

languages.contains('spanish')
// false

languages.contains('xx')
// false
```

### Get Language by ISO code
Get a Language by a valid ISO 639-2 code:
```
languages.get('es')
/*
{
  code: 'es',
  name: 'Spanish',
  local: 'Español'
}
*/
```
