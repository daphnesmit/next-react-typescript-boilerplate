/**
 * Add global polyfills for application
 * Next.js adds corejs (babel-polyfill), the URL api and fetch by default so you dont have to include those
 * @see {@link https://www.npmjs.com/package/intersection-observer|intersection-observer}
 * @see {@link https://www.npmjs.com/package/abortcontroller-polyfill|abortcontroller-polyfill}
 */
import 'intersection-observer'
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'
