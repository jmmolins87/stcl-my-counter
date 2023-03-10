import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css',
  shadow: true,
})
export class MyCounter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
