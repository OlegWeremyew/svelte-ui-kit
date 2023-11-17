import {currentFrame} from "@/store/state";
import {sendCallback} from "./send-callback";

export function setIframeEvents(elClass: string): void {
  let iFrame = document.querySelector(`.frames_${elClass} iframe`) as HTMLIFrameElement;

  let links = iFrame.contentWindow.document
    .querySelectorAll("a[href]") as NodeListOf<HTMLAnchorElement>;

  Array.from(links).forEach((link: HTMLAnchorElement): void => {
    if (link.classList.contains("close")) {
      link.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        currentFrame.update(() => ({
          name: elClass,
          isVisible: false,
        }));
      });
    } else if (link.classList.contains("privacy")) {
      link.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        currentFrame.update(() => ({
          name: "privacy",
          isVisible: true,
        }));
        setIframeEvents("privacy");
      });
    }
      else if (link.classList.contains("terms")) {
        link.addEventListener("click", (event: MouseEvent) => {
          event.preventDefault();
          currentFrame.update(() => ({
            name: "terms",
            isVisible: true,
          }));
          setIframeEvents("terms");
        });
    } else if (!!link.href && link.href.indexOf("javascript:") === -1) {
      link.addEventListener("click", (event: MouseEvent) => {
        event.preventDefault();
        let href: string = link.getAttribute("href");
        sendCallback(`http://callquietly.io/url/open?path=${encodeURI(href)}`);
      });
    }
  });
}
