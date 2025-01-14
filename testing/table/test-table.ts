/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators.js';

import {TestTable} from './internal/test-table.js';
import {styles as testTableStyles} from './internal/test-table-styles.css.js';

export {type TestTableTemplate} from './internal/test-table.js';

declare global {
  interface HTMLElementTagNameMap {
    'md-test-table': MdTestTable;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
@customElement('md-test-table')
export class MdTestTable<S extends string = string> extends TestTable<S> {
  static override styles = [testTableStyles];
}
