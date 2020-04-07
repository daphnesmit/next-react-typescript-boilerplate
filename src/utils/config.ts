import getConfig from 'next/config'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export const config = publicRuntimeConfig
export const serverConfig = serverRuntimeConfig
