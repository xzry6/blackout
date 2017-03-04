import * as React from 'react';
import './Hello.css';
import {AppState, TimerView} from "./Mobx";

const appState =  new AppState();

export interface HelloProps {
  compiler: string;
  framework: string;
}

class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return (
      <div className="Hello">
        <div className="Hello-header">
          <img src='./src/components/logo.svg' className="Hello-logo" alt="logo" />
          <h2>Hello from {this.props.compiler} and {this.props.framework}!</h2>
        </div>
        <p className="Hello-intro">
          To get started, edit <code>src/Hello.tsx</code> and save to reload.
        </p>
        <TimerView appState={appState} />
      </div>
    );
  }
}

export default Hello;
