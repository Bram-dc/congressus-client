# @itbg/congressus-client

[![npm version](https://img.shields.io/npm/v/@itbg/congressus-client.svg)](https://www.npmjs.com/package/@itbg/congressus-client)

A generated TypeScript client for the Congressus API.


## Installation

```bash
npm install @itbg/congressus-client
```


## Usage
```typescript
import { client } from '@itbg/congressus-client';

async function main() {
  const data = await client.someEndpoint();
  console.log(data);
}

main();
```


## Note

This client is published by a third party and is not an official Congressus product.