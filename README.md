# use-async-storage

A React native hook using AsyncStorage, with some improved functionality

## API

`useAsyncStorage` is a function that takes two parameters:

- `storageKey`: This is a string used as the key the device will use to store the value in memory, so this will unique for majority of cases.
- `defaultValue`: This is the value the hook will return if nothing is found in storage. This can be a boolean, array, string or object.

And Returned from `useAsyncStorage`is a value, and a function to set the value, which will be persisted in the devices memory.

## Usage

### First time the hooks called

```typescript
import { useAsyncStorage } from "use-async-storage";
const [value, setValue] = useAsyncStorage("someObject", {});

console.log(value); // {}

setValue({ foo: "bar" });

console.log(value); // { foo: 'bar' }
```

### And at some point later...

```typescript
import { useAsyncStorage } from "use-async-storage";
const [value, setValue] = useAsyncStorage("someObject", {});

console.log(value); // { foo: 'bar' }
```

The value is now returned from the AsyncStore
