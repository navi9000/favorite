export function env(variableName) {
  const value = import.meta.env[variableName]
  if (!value) {
    throw new Error(`The .env file does not exist,
            or does not contain variable ${variableName},
            or is being accessed from a client component.`)
  }

  return value
}
