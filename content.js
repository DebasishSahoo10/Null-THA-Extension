const collectProcess = (element) => {
  if (element.setSelectionRange) {
    element.focus();
    element.setSelectionRange(0, 0);
  } else if (element.createTextRange) {
    var range = element.createTextRange();
    range.moveStart("character", 0);
    range.select();
  }
  var btnHolder = document.querySelector('[data-testid="tweetButtonInline"]');
  var buttonElement = document.createElement("button");
  buttonElement.textContent = "Collect";
  btnHolder.insertAdjacentElement("afterend", buttonElement);
  // Button Styles
  buttonElement.style.marginLeft = "10px";
  buttonElement.style.backgroundColor = "rgb(29, 155, 240)";
  buttonElement.style.padding = "10px 15px";
  buttonElement.style.fontFamily = "system-ui";
  buttonElement.style.border = "0px";
  buttonElement.style.borderRadius = "18px";
  buttonElement.style.fontWeight = "bold";
  buttonElement.addEventListener("click", function () {
    var element = document.querySelector('[data-testid="tweetTextarea_0"]');
    const div = document.querySelector('[data-testid="tweetText"]');
    const spanText = div
      ? div.querySelector("span").innerText
      : "Element not found";
    var element = document.querySelector('[data-testid="tweetTextarea_0"]');
    element.value = spanText;
    element.click();
    element.dispatchEvent(new Event("input", { bubbles: true }));
  });
};
function checkIfElementLoaded() {
  const element = document.querySelector('[data-testid="tweetTextarea_0"]');
  if (element) {
    if (window.location.href.includes("/status/")) {
      collectProcess(element);
    }
    observer.disconnect();
  }
}
const observer = new MutationObserver(checkIfElementLoaded);
const config = { childList: true, subtree: true };
observer.observe(document.body, config);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "History Changed") {
    if (window.location.hostname === "twitter.com") {
      if (request.url.includes("/status/")) {
        observer.observe(document.body, config);
      }
    }
  }
});
