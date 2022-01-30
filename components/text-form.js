class TextForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('text-form is connected')
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template();
  }

  template() {
    return `
      <div id="ok-label">OK</div>
      <div id="cancel-label">Cancel</div>
      <input type="text" id="input" placeholder="入力してください" />

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
      </script>
    `;
  }
}

customElements.define('text-form', TextForm);