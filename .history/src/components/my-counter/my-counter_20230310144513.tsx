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

  componentWillLoad() {
    this.initalValue = this.currentValue;
  }

  countDown() { this.currentValue -= 1; }
  countUp() { this.currentValue += 1; }

  render() {
    return (
      <Host>
        <div class="counter-container">
          <button>-</button>
          <span class="counter-content">{this.currentValue}</span>
          <button>+</button>
        </div>
      </Host>
    );
  }
}
