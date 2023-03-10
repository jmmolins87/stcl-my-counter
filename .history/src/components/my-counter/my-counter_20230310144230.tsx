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

  render() {
    return (
      <Host>
        <div class="counter-container">
          <button>-</button>
          <span>{ this.currentValue }</span>
          <button>+</button>
        </div>
      </Host>
    );
  }

}
