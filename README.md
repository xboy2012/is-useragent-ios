# is-useragent-ios

## Install

```
npm i is-useragent-ios
```


## Usage

```javascript
import isUserAgentIOS from 'is-useragent-ios'

// get UA string from navigator or somewhere else
const ua = navigator.userAgent

// invoke the method
const isIOS = isUserAgentIOS(ua)

// outputs whether the browser is iOS
console.log(isIOS)

```
