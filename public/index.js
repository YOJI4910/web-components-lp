(() => {
  // components/image-box.js
  var ImageBox = class extends HTMLElement {
    constructor() {
      super();
      console.log("hello");
    }
    connectedCallback() {
      console.log("image-box is connected");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = this.template();
    }
    template() {
      return `
      <style>
        ::slotted(img) {
          display: block;
          width: 100%;
        }
      </style>

      <slot name="set-image"><div>No Image</div></slot>
    `;
    }
  };
  customElements.define("image-box", ImageBox);

  // components/text-form.js
  var TextForm = class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      console.log("text-form is connected");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = this.template();
    }
    template() {
      return `
      <div id="ok-label">OK</div>
      <div id="cancel-label">Cancel</div>
      <input type="text" id="input" placeholder="\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" />

      <script>
        const input = document.getElementById('input');
        input.addEventListener('blur', (e) => {
          console.log('test');
          if (input.value.length > 0) {
            document.getElementById('ok-label').style.display = 'block';
            document.getElementById('cancel-label').style.display = 'none';
          } else {
            document.getElementById('ok-label').style.display = 'none';
            document.getElementById('cancel-label').style.display = 'block';
          }
        }
      <\/script>
    `;
    }
  };
  customElements.define("text-form", TextForm);
})();
//# sourceMappingURL=index.js.map
