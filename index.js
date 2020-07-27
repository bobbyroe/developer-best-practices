// import snippets from "./html-snippets.js"
function renderCodeSnippets() {
  const template = document.getElementById('code-snippet-box');
  const container = document.getElementById('examples-container');
  snippets.forEach((s) => {
    const clone = template.content.cloneNode(true);
    const codeElement = clone.querySelector('.lang-html');
    codeElement.textContent = s.code;
    const title = clone.querySelector('h3');
    title.textContent = s.title;
    const description = clone.querySelector('p');
    description.textContent = s.text;
    container.appendChild(clone);
  });
}

renderCodeSnippets();
