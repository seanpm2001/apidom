# @swagger-api/apidom-parser-adapter-asyncapi-yaml-2

`@swagger-api/apidom-parser-adapter-asyncapi-yaml-2` is a parser adapter for following AsyncAPI specification versions defined in [YAML format](https://yaml.org/spec/1.2/spec.html):

- [AsyncAPI 2.4.0 specification](https://github.com/asyncapi/spec/blob/v2.4.0/spec/asyncapi.md)
- [AsyncAPI 2.3.0 specification](https://github.com/asyncapi/spec/blob/v2.3.0/spec/asyncapi.md)
- [AsyncAPI 2.2.0 specification](https://github.com/asyncapi/spec/blob/v2.2.0/spec/asyncapi.md)
- [AsyncAPI 2.1.0 specification](https://github.com/asyncapi/spec/blob/v2.1.0/spec/asyncapi.md)
- [AsyncAPI 2.0.0 specification](https://github.com/asyncapi/spec/blob/2.0.0/versions/2.0.0/asyncapi.md)

Under the hood this adapter uses [@swagger-api/apidom-parser-adapter-yaml-1-2](https://github.com/swagger-api/apidom/tree/main/packages/apidom-parser-adapter-yaml-1-2)
to parse a source string into generic ApiDOM in [base ApiDOM namespace](https://github.com/swagger-api/apidom/tree/main/packages/apidom#base-namespace)
which is then refracted with [AsyncApi 2.x.y Refractors](https://github.com/swagger-api/apidom/tree/main/packages/apidom-ns-asyncapi-2#refractors).

## Installation

`@swagger-api/apidom-parser-adapter-asyncapi-yaml-2` is currently hosted on [GitHub packages registry](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages).
For installing `@swagger-api/apidom-parser-adapter-asyncapi-yaml-2` from GitHub packages registry, create `.npmrc` file in your current directory and add
the following line to it:

```
@swagger-api:registry=https://npm.pkg.github.com
```

You can now install the package using `npm`:

```sh
 $ npm install @swagger-api/@swagger-api/apidom-parser-adapter-asyncapi-yaml-2
```

## Parser adapter API

This parser adapter is fully compatible with parser adapter interface required by [@swagger-api/apidom-parser](https://github.com/swagger-api/apidom/tree/main/packages/apidom-parser#mounting-parser-adapters)
and implements all required properties.

### mediaTypes

Defines list of media types that this parser adapter recognizes.

```js
[
  'application/vnd.aai.asyncapi;version=2.0.0',
  'application/vnd.aai.asyncapi;version=2.1.0',
  'application/vnd.aai.asyncapi;version=2.2.0',
  'application/vnd.aai.asyncapi;version=2.3.0',
  'application/vnd.aai.asyncapi;version=2.4.0',
  'application/vnd.aai.asyncapi+yaml;version=2.0.0',
  'application/vnd.aai.asyncapi+yaml;version=2.1.0',
  'application/vnd.aai.asyncapi+yaml;version=2.2.0',
  'application/vnd.aai.asyncapi+yaml;version=2.3.0',
  'application/vnd.aai.asyncapi+yaml;version=2.4.0',
]
```

### detect

[Detection](https://github.com/swagger-api/apidom/blob/main/packages/apidom-parser-adapter-asyncapi-yaml-2/src/adapter.ts#L13) is based on a regular expression matching required AsyncApi 2.x.y specification symbols in YAML format.

### namespace

This adapter exposes an instance of [AsyncApi 2.x.y ApiDOM namespace](https://github.com/swagger-api/apidom/tree/main/packages/apidom-ns-asyncapi-2#asyncapi-2xy-namespace).

### parse

`parse` function consumes various options as a second argument. Here is a list of these options:

Option | Type | Default | Description
--- | --- | --- | ---
<a name="specObj"></a>`specObj` | `Object` | [Specification Object](https://github.com/swagger-api/apidom/blob/main/packages/apidom-parser-adapter-yaml-1-2/src/parser/specification.ts#L14) | This specification object drives the YAML AST transformation to base ApiDOM namespace.
<a name="sourceMap"></a>`sourceMap` | `Boolean` | `false` | Indicate whether to generate source maps.
<a name="refractorOpts"></a>`refractorOpts` | `Object` | `{}` | Refractor options are [passed to refractors](https://github.com/swagger-api/apidom/tree/main/packages/apidom-ns-asyncapi-2#refractor-plugins) during refracting phase.

All unrecognized arbitrary options will be ignored.

## Usage

This parser adapter can be used directly or indirectly via [@swagger-api/apidom-parser](https://github.com/swagger-api/apidom/tree/main/packages/apidom-parser).

### Direct usage

During direct usage you don't need to provide `mediaType` as the `parse` function is already pre-bound
with [supported media types](#mediatypes).

```js
import { parse, detect } from '@swagger-api/apidom-parser-adapter-asyncapi-yaml-2';

// detecting
await detect('asyncapi: 2.0.0'); // => true
await detect('asyncapi: 2.1.0'); // => true
await detect('asyncapi: 2.2.0'); // => true
await detect('asyncapi: 2.3.0'); // => true
await detect('asyncapi: 2.4.0'); // => true
await detect('test'); // => false

// parsing
const parseResult = await parse('asyncapi: 2.4.0', { sourceMap: true });
```

### Indirect usage

You can omit the `mediaType` option here, but please read [Word on detect vs mediaTypes](https://github.com/swagger-api/apidom/tree/main/packages/apidom-parser#word-on-detect-vs-mediatypes) before you do so.

```js
import ApiDOMParser from '@swagger-api/apidom-parser';
import * as asyncApiYamlAdapter from '@swagger-api/apidom-parser-adapter-asyncapi-yaml-2';

const parser = ApiDOMParser();

parser.use(asyncApiYamlAdapter);

const parseResult = await parser.parse('asyncapi: 2.4.0', { mediaType: asyncApiYamlAdapter.mediaTypes.latest('yaml') });
```