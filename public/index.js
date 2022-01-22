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
})();
//# sourceMappingURL=index.js.map
