export const sendCallback = (url: string): void => {
  const a = document.createElement("a") as HTMLAnchorElement;
  a.style.display = "none";
  console.log("clickUrl:", url);
  a.href = url;
  a.click();
};

export const sendMultipleCallbacks = (urls: string[]): void => {
  urls.forEach((url: string) => sendCallback(url));
};
