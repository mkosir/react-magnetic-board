import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/Default';
import UndoClear from './UndoClear/UndoClear';
import PersistentMagnets from './PersistentMagnets/PersistentMagnets';
import MagneticBoard from './MagneticBoard/MagneticBoard';
import './ReactMagneticBoard.scss';

const stories = storiesOf('React Magnetic Board', module);

stories
  .add('Default', () => <Default />)
  .add('Undo/Clear Board', () => <UndoClear />)
  .add('Persistent Magnets - Local Storage', () => <PersistentMagnets />)
  .add('Magnetic Board', () => <MagneticBoard />);
