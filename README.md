<p align="center">
  <a href="https://codbex.com/aerokit/" rel="noopener" target="_blank"><img width="256" height="256" src="docs/public/logo/aerokit-circle.png" alt="Aerokit logo"></a>
</p>

<h1 align="center">Aerokit</h1>

Aerokit is a TypeScript SDK for the Low-Code Platform

## Build steps

1. Install dependencies

```sh
npm install
```

2. Build the library

```sh
npm run build
```

## Build the documentation

1. Build the library
2. Install document dependencies

```sh
npm run docs:install
```

3. Build the library

Even if you did a library build before, you need to do this after you install the document dependencies

```sh
npm run build
```

3. Build the documentation

```sh
npm run docs:build
```

4. Run the preview

```sh
npm run docs:preview
```

If you are doing active development, then you should use the dev mode instead:

```sh
npm run docs:dev
```
