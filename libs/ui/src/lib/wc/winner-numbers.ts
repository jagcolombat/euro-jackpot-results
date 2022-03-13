import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('wc-winner-numbers')
export class WinnerNumbers extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
    }

    .number, .euro-number {
      display: flex;
    }

    .number span, .euro-number span{
      border-radius: 50%; 
      border:1px solid; 
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;
    }

    .number span{
      border-color: var(--number-color);
    }

    .euro-number span {
      border-color: var(--enumber-color);
    }

    .separator {
      margin: 10px;
    }
  `;

  @property({ type: Array }) numbers?: number[] = [1,2,3];
  @property({ type: Array }) euronumbers?: number[] = [4,5];

  override render() {
    if (this.numbers === undefined || this.euronumbers === undefined) {
      return '';
    }

    return html`
      <div class="number">
        ${this.numbers.map((number: number) =>
          html`<span>${number}</span>`
        )}
      </div>
      <label class="separator"> + </label>
      <div class="euro-number">
        ${this.euronumbers.map((enumber: number) =>
          html`<span>${enumber}</span>`
        )}
      </div>
    `;
  }

}