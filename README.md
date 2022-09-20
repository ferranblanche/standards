# Standards

This library provides ISO codes for:

- [639-1] Languages including 2-letter code, English and local names.

## Installation

It can be installed in whichever way you prefer, but I recommend NPM:

```sh
npm install @ferranblanche/standards
```

## Countries

Import de Countries module:

```typescript
import { Countries } from "@ferranblanche/standards";
const countries = new Countries();
```

### Validate ISO code

Validate a String is a valid ISO 639-2 code:

```typescript
countries.contains("us");
// true

countries.contains("es");
// true

countries.contains("Japan");
// false

countries.contains("xx");
// false
```

### Get Country by ISO code

Get a Country by a valid ISO 639-1 code:

```typescript
countries.get("es");
/*
{
  "name": "Spain",
  "local": "España",
  "code": "es",
  "region": "Europe",
  "currency": "eur",
  "language": "es",
  "flag": "🇪🇸"
}
*/

countries.get("us");
/*
{
  "name": "United States of America",
  "local": "United States of America",
  "code": "us",
  "region": "North America",
  "currency": "usd",
  "language": "en",
  "flag": "🇺🇸"
}
*/

countries.get("xx");
// undefined

countries.get("Spain");
// undefined
```

Access the Country information:

```typescript
let name = countries.get("nl").name;
// "Netherlands"
```

or

```typescript
const poland = countries.get("pl");
let localName = poland.local;
// "Polska"
```

### Search Language by Text

Search Language by Text:

```typescript
countries.search("de");
/*
{
  "name": "Germany",
  "local": "Deutschland",
  "code": "de",
  "region": "Europe",
  "currency": "eur",
  "language": "de",
  "flag": "🇩🇪"
}
*/

countries.search("Espa");
/*
{
  "name": "Spain",
  "local": "España",
  "code": "es",
  "region": "Europe",
  "currency": "eur",
  "language": "es",
  "flag": "🇪🇸"
}
*/

countries.search("中");
/*
{
  "name": "China",
  "local": "中国",
  "code": "cn",
  "region": "Asia & Pacific",
  "currency": "cny",
  "language": "zh-hans",
  "flag": "🇨🇳"
}
*/

countries.search("S語");
// undefined
```

## Languages

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

Get a Language by a valid ISO 639-1 code:

```typescript
languages.get("es");
// { code: "es", name: "Spanish", local: "Español" }

languages.get("en");
// { code: "en", name: "English", local: "English" }

languages.get("xx");
// undefined

languages.get("Spanish");
// undefined
```

Access the Language information:

```typescript
let name = languages.get("en").name;
// "English"
```

or

```typescript
const spanish = languages.get("es");
let localName = spanish.local;
// "Español"
```

### Search Language by Text

Search Language by Text:

```typescript
languages.search("nl");
// { code: "nl", name: "Dutch", local: "Nederlands" }

languages.search("Span");
// { code: "es", name: "Spanish", local: "Español" }

languages.search("語");
// { "code": "ja", "name": "Japanese", "local": "日本語" }

languages.search("Span本語");
// undefined
```
