# Standards

This library provides ISO codes for:

- [3166-1] [Countries](#countries)
- [4217] [Currencies](#currencies)
- [639-1] [Languages](#languages)

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

### Validate Country code

Validate a String is a valid ISO 3166-1 code:

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

### Get Country by code

Get a Country by a valid ISO 3166-1 code:

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

### Search Country by text

Search Country by text:

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

## Currencies

Import de Currencies module:

```typescript
import { Currencies } from "@ferranblanche/standards";
const currencies = new Currencies();
```

### Validate Currency code

Validate a String is a valid ISO 4217 code:

```typescript
currencies.contains("usd");
// true

currencies.contains("eur");
// true

currencies.contains("US Dollar");
// false

currencies.contains("xxx");
// false
```

### Get Currency by code

Get a Currency by a valid ISO 4217 code:

```typescript
currencies.get("eur");
/*
{
  "code": "eur",
  "name": "Euro",
  "decimals": 2,
  "symbol": "€"
}
*/

currencies.get("usd");
/*
{
  "code": "usd",
  "name": "US Dollar",
  "decimals": 2,
  "symbol": "$"
}
*/

currencies.get("xxx");
// undefined

currencies.get("Euro");
// undefined
```

Access the Currency information:

```typescript
let name = currencies.get("eur").name;
// "Euro"
```

or

```typescript
const euro = currencies.get("eur");
let symbol = euro.local;
// "€"
```

### Search Currency by text

Search Currency by text:

```typescript
currencies.search("Dirham");
/*
{ 
  "code": "mad", 
  "name": 
  "Moroccan Dirham", 
  "decimals": 2, 
  "symbol": "" 
}
*/

currencies.search("¥");
/*
{ 
  "code": "cny", 
  "name": "Yuan Renminbi", 
  "decimals": 2, 
  "symbol": "¥" 
}
*/

currencies.search("hello¥€");
// undefined
```

## Languages

Import de Languages module:

```typescript
import { Languages } from "@ferranblanche/standards";
const languages = new Languages();
```

### Validate Language code

Validate a String is a valid ISO 639-1 code:

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

### Get Language by code

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

### Search Language by text

Search Language by text:

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
