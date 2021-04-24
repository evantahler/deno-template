# Deno Template

[![Test](https://github.com/evantahler/deno-template/actions/workflows/deno.yml/badge.svg)](https://github.com/evantahler/deno-template/actions/workflows/deno.yml)

## Running

```
cp env.example .env
```

then

```
./bin/start
```

## Developing

We use [`denon`](https://deno.land/x/denon/denon.ts) to watch for changes and restart while developing

```
./bin/dev
```

## Testing

```
./bin/test
```

## Compiling

```
./bin/compile
```

## Notes

- We use Import Maps
- VSCode needs to opt-into deno (so it knows it's not JS/TS)
