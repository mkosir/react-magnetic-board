import React from 'react';
import { storiesOf } from '@storybook/react';

import Default from './Default/_Default';
import UndoClear from './UndoClear/_UndoClear';
import PersistentMagnets from './PersistentMagnets/_PersistentMagnets';
import MagneticBoard from './MagneticBoard/_MagneticBoard';
import './ReactMagneticBoard.scss';

const stories = storiesOf('Examples', module);

stories
  .add('Default', () => <Default />)
  .add('Undo/Clear Board', () => <UndoClear />)
  .add('Persistent Magnets - Local Storage', () => <PersistentMagnets />)
  .add('Magnetic Board', () => <MagneticBoard />);
