declare global {
  interface Window {
    __NEXT_DATA__: {
      props: {
        [key: string]: any
      }
    }
  }
}

export const hydrate = (key = '') => {
  if (process.browser) {
    return window.__NEXT_DATA__.props[key] || window.__NEXT_DATA__.props
  }
}
