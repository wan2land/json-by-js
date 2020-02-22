
function stringify(value) {
  if (value === null) {
    return "null"
  }
  if (typeof value === "number") {
    if (Number.isNaN(value)) {
      return "NaN"
    }
    if (!Number.isFinite(value)) {
      return value > 0 ? "Infinity" : "-Infinity"
    }
    return `${value}`
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false"
  }
  if (typeof value === "string") {
    return `"${value.replace('"', '\\"')}"` // " 문자는 escape 해야합니다.
  }

  if (Array.isArray(value)) {
    return `[${value.map(stringify).join(",")}]`
  }
  if (value instanceof RegExp) {
    return value.toString()
  }
  return `{${Object.entries(value).map(([k, v]) => `"${k.replace('"', '\\"')}":${stringify(v)}`).join(",")}}`
}

module.exports = { stringify }
