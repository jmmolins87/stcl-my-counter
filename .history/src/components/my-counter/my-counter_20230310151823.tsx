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
          <button onClick={ () => this.countDown() } class="btn">
            <span>-</span>
          </button>
          <span class="content">{ this.currentValue }</span>
          <button onClick={ () => this.countUp() } class="btn">
            <span>+</span>
          </button>
        </div>
      </Host>
    );
  }
}
