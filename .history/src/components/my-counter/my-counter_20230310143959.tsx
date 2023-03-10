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
        <button>-</button>
        <button>+</button>
      </Host>
    );
  }

}
