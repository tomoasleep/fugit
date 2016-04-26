import global from 'global';
import React from 'react';

export default function setGlobal() {
  global.React = React;
}
