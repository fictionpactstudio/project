const config = [
  ...(
    await import("eslint-config-next/core-web-vitals")
  ).default,
  ...(
    await import("eslint-config-next/typescript")
  ).default,
]

export default config
