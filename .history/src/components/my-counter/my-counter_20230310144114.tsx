import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {

  @Prop() initalValue: number = 0;

  render() {
    return (
      <Host>
        <div class="counter-container">
          <button>-</button>
          <span>{ this.initalValue }</span>
          <button>+</button>
        </div>
      </Host>
    );
  }

}
