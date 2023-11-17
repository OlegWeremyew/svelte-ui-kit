const global = window as any;

export function getCallbackDomain() {
  let scheme = "https://callback.io";
  if (typeof global._EMBEDDED !== "undefined") {
    scheme = global._EMBEDDED
      ? "https://callquietly.io"
      : "https://callback.io";
  }
  return scheme;
}
