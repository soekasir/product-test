import { Container } from 'inversify'
import { Provider } from 'inversify-react';
import { Component } from 'react';

interface Props {
  children: React.ReactNode;
}

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
  skipBaseClassChecks: true
})

export class SingletonContainer extends Component<Props>{
  render(){
    return(
      <Provider container={container}>
        {this.props.children}
      </Provider>
    )
  }
}
