/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {customElement} from 'lit-element';

import {TopAppBarBase} from './mwc-top-app-bar-base';
import {style} from './mwc-top-app-bar-css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-top-app-bar': TopAppBar;
  }
}

@customElement('mwc-top-app-bar')
export class TopAppBar extends TopAppBarBase {
  static styles = style;
}
