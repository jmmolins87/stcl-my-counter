import { 
  Component, 
  Host, 
  h, 
  Prop, 
  State 
} from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {
  @Prop() initalValue: number = 0;

  @State() currentValue: number;

  componentWillLoad() { this.currentValue = this.initalValue; }
  countDown() { this.currentValue -= 1; }
  countUp() { this.currentValue += 1; }

  render() {
    return (
      <Host>
        <div class="counter-container">
          <button onClick={ () => this.countDown() }>-</button>
          <span class="counter-content">{ this.currentValue }</span>
          <button onClick={ () => this.countUp() }>+</button>
        </div>
      </Host>
    );
  }
}
