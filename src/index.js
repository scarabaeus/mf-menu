import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = (props) => {
  const { container } = props;
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  );
};

const storeTest = (props) => {
  props.onGlobalStateChange(
    (value, prev) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true,
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
};

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export const bootstrap = async () => {
  console.log('[mf-menu] react app bootstraped');
};

export const mount = async (props) => {
  console.log('[mf-menu] props from main framework', props);
  storeTest(props);
  render(props);
};

export const unmount = async (props) => {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root'),
  );
};
