# Standards

This library provides ISO codes for:

- [639] Languages including 2-letter code, English and local names.

## Installation

It can be installed in whichever way you prefer, but I recommend NPM:

```sh
npm install @ferranblanche/standards
```

## Getting started

Import de Languages module:

```typescript
import { Languages } from "@ferranblanche/standards";
const languages = new Languages();
```

### Validate ISO code

Validate a String is a valid ISO 639-2 code:

```typescript
languages.contains("en");
// true

languages.contains("es");
// true

languages.contains("spanish");
// false

languages.contains("xx");
// false
```

### Get Language by ISO code

Get a Language by a valid ISO 639-2 code:

```typescript
languages.get("es");
// { code: 'es', name: 'Spanish', local: 'Español' }

languages.get("en");
// { code: 'en', name: 'English', local: 'English' }

languages.get("xx");
// undefined

languages.get("Spanish");
// undefined
```

Access the Language information:

```typescript
let name = languages.get("en");
// 'English'
```

or

```typescript
const spanish = languages.get("es");
let localName = spanish.local;
// 'Español'
```
