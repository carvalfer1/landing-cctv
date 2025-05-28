import scrollToElement from 'scroll-to-element';

export const scrollToHash = (id) => {
  scrollToElement(`#${id}`, {
    offset: 0,
    // ease: 'out-bounce',
    duration: 1500,
  });
};
export const showFile = (link) => {
  var a = document.createElement("a");
  a.innerHTML = "CLICK ME";
  a.href = link;
  a.target = "_blank";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
