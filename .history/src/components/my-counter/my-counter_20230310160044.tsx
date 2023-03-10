import { 
  Component, 
  Host, 
  h, 
  Prop, 
  State, 
  Watch,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.scss',
  shadow: true,
})
export class MyCounter {

  @Prop() initValue: number = 0;

  // Rederizar mediante etiqueta state para que cambie de valor y volver a renderizar el componente
  @State() currentValue: number;

  // Escucha desde fuera del componente y cambiamos el valor
  @Watch("initValue") initValueHandler( newValue: number, oldValue: number ) {
    if( newValue !== oldValue ) this.initValue = newValue;
    this.currentValue = newValue;
  }

  @Event() counterValue:EventEmitter;

  componentWillLoad() { this.currentValue = this.initValue; }
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

