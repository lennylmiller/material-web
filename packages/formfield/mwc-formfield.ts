/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import {customElement} from 'lit-element';

import {FormfieldBase} from './mwc-formfield-base';
import {style} from './mwc-formfield-css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-formfield': Formfield;
  }
}

@customElement('mwc-formfield')
export class Formfield extends FormfieldBase {
  static styles = style;
}
