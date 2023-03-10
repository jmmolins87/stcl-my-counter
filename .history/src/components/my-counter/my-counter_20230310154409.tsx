import { 
  Component, 
  Host, 
  h, 
  Prop, 
  State, 
  Watch
} from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {

  @Prop() initalValue: number = 0;

  // Rederizar mediante etiqueta state para que cambie de valor y volver a renderizar el componente
  @State() currentValue: number;

  @Watch('initValue') initHandler( newValue, oldValue) {
    console.log( `MyCounter ->@watch -> new value, old value`,
    newValue, oldValue );    
  }

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
function Watches() {
  throw new Error('Function not implemented.');
}

