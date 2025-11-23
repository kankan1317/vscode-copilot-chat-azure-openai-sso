/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IEnvService } from '../../env/common/envService';
import { IFetcherService } from '../../networking/common/fetcherService';
import { BaseCAPIClientService } from '../common/capiClient';

export class CAPIClientImpl extends BaseCAPIClientService {

	constructor(
		@IFetcherService fetcherService: IFetcherService,
		@IEnvService envService: IEnvService
	) {
		super(
			process.env.HMAC_SECRET,
			process.env.VSCODE_COPILOT_INTEGRATION_ID,
			fetcherService,
			envService
		);
	}

	get proxyBaseURL(): string {
		return 'https://localhost/dummy/proxy';
	}

	get originTrackerURL(): string {
		return 'https://localhost/dummy/origin-tracker';
	}
}