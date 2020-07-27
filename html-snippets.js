const snippets = [
  {
    title: "If it goes somewhere, it's a link",
    text: 'Links should take people to difference URIs.',
    code: `<a href="/contact/">
  Contact
</a>`,
  },
  {
    title: "If it does something it's a button",
    text: 'Use buttons to control actions on the page',
    code: `<button type="button">
    Menu
</button>`,
  },
  {
    title: 'Meaningful alt attribute',
    text: 'Describe the content of the image in a helpful way.',
    code: `<img src="/logo.gif" alt="T-Mobile">
<img src="/barnyard.jpg" alt="Large barn and a cow">`,
  },
  {
    title: 'Native elements are already accessibile',
    text:
      'Screen readers already understand descriptions, role, relationships, state, focus and actions (DRRSFA) for properly written form elements, minimizing scripting and maintenance.',
    code: `<form>
  <fieldset>
    <legend>
      Select a product
    </legend>
    <input type="radio" id="alpha">
    <label for="alpha">
      Product Alpha
    </label>
    <input type="radio" id="bravo">
    <label for="bravo">
    Product Bravo
    </label>
  </fieldset>
  <label for="name">
  <input type="text" id="name">
  <input type="checkbox" id="agree">
  <label for="agree">
    I agree
  </label>
  <input type="submit" name="submit">
</form>`,
  },
  {
    title: 'Start with landmarks',
    text: 'Use html landmarks to signify areas of the page.',
    code: `<header>
  <banner></banner>
  <nav></nav>
</header>
<main></main>
<footer></footer>`,
  },
  {
    title: 'Logically order the DOM',
    text:
      'Starting with a single H1, use semantic HTML elements to structure content in a meaniful way.',
    code: `<h1>About</h1>
<h2>Our history</h2>
<ul>
  <li>Founded 2017</li>
  <li>Reached $1B in 2018</li>
  <li>Acquired in 2019</li>
</ul>
<h2>Locations and services</h2>
<table>
  <caption><caption>
  <tr>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
<h2>How we are different</h2>
<h3>Our Pricing</h3>
<p></p>
<h3>Our Service</h3>
<p></p>`,
  },
  {
    title: 'Use figure for charts and data',
    text: `Figures tie together complex information like charts and diagrams.

    Tables and blockquotes can also be wrapped in a figure element to connect sources and citations.`,
    code: `<figure>
  <figcaption>Sales Volume</figcaption>
  <img src="/chart.png"
    alt="Sales diagram, showing
    the huge success in Q4"
  longdesc="…">
</figure>
  
<!-- blockquote -->
  
<figure>
  <blockquote>
    A solution will present itself.
  </blockquote>
  <figcaption>
    Qui Gon Jin
    <cite>
      Star Wars: The Phantom Menace
    </cite>
  </figcaption>
</figure>`,
  },
  {
    title: 'Add focus with tabindex',
    text:
      'Giving an element "0" places it in the tabindex making it focusable. Adding "-1" remove an element from tabindex, but makes it focusable with js or as a target.',
    code: `<div tabindex="0">
  I can focus on this element.
</div>
<div tabindex="-1">
  This element can receive focus,
  but isn't in the tab index.
</div>`,
  },
  {
    title: 'Use aria only where neccessary',
    text:
      "When native elements can't be used, ARIA can be used to fill in the gaps for descriptions, role, relationships, state, focus and actions (DRRSFA).",
    code: `<label for="zip" id="zip-label">
  Zip Code
</label>
<div class="combobox-wrapper">
  <div id="zip-combobox"
    role="combobox"
    aria-expanded="false"
    aria-owns="zip-list"
    aria-haspopup="listbox">
    <input type="text"
      id="zip"
      aria-autocomplete="list"
      aria-controls="listbox">
  </div>
  <ul aria-labelledby="zip-label"
    role="listbox"
    id="zip-list"
    class="listbox hidden">
  </ul>
</div>`,
  },
  {
    title: 'Live content',
    text: 'Content that dynamically updates can be read politely or assertively.',
    code: `<div id="clock"
  role="timer"
  aria-live="polite"
    aria-atomic="true">
</div>
<div id="status"
role="status"
  aria-live="assertive"
  aria-atomic="true">
</div>`,
  },
];
