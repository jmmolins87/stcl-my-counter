import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {

  render() {
    return (
      <Host>
        <div class="counter-container">
          <button>-</button>
          <button>+</button>
        </div>
      </Host>
    );
  }

}
