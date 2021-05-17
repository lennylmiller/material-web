/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {customElement} from 'lit-element';

import {DrawerBase} from './mwc-drawer-base';
import {style} from './mwc-drawer-css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-drawer': Drawer;
  }
}

@customElement('mwc-drawer')
export class Drawer extends DrawerBase {
  static styles = style;
}
