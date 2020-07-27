// import snippets from "./html-snippets.js"
function renderCodeSnippets() {
  const template = document.getElementById('code-snippet-box');
  const container = document.getElementById('examples-container');
  snippets.forEach((s) => {
    const clone = template.content.cloneNode(true);
    const codeElement = clone.querySelector('.lang-html');
    // console.log(s.code);
    codeElement.textContent = s.code;
    container.appendChild(codeElement);
  });
}

renderCodeSnippets();
