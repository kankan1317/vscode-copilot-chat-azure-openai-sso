/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { DisposableStore, IDisposable } from '../../../util/vs/base/common/lifecycle';

export class RemoteAgentContribution implements IDisposable {
	private disposables = new DisposableStore();

	constructor() {
		// No-op
	}

	dispose() {
		this.disposables.dispose();
	}
}
