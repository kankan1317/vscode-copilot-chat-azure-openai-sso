# Attribution and Licensing

## Original Work

This project is a modified version of the **GitHub Copilot Chat extension** developed by Microsoft Corporation.

- **Original Repository**: [microsoft/vscode-copilot-chat](https://github.com/microsoft/vscode-copilot-chat)
- **Original Copyright**: Copyright (c) Microsoft Corporation. All rights reserved.
- **Original License**: MIT License

## Modifications

This extension has been modified to work with Azure OpenAI Studio instead of GitHub Copilot. Key modifications include:

1. **Authentication System**
   - Replaced GitHub authentication with Azure Entra ID (formerly Azure Active Directory)
   - Implemented Microsoft authentication provider integration
   - Removed GitHub-specific authentication flows

2. **API Integration**
   - Changed from GitHub Copilot API to Azure OpenAI Studio endpoints
   - Implemented Azure-specific endpoint handling
   - Updated request/response processing for Azure OpenAI format

3. **Feature Removals**
   - Removed GitHub-specific features (inline completions, GitHub MCP server)
   - Disabled GitHub account dependencies
   - Removed GitHub branding and UI elements

4. **Configuration**
   - Updated extension settings for Azure OpenAI models
   - Modified default authentication provider to Microsoft
   - Adapted configuration schema for Azure endpoints

## License

This modified version is released under the same **MIT License** as the original work.

### MIT License

Copyright (c) Microsoft Corporation. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments

We are grateful to Microsoft Corporation and the GitHub Copilot team for creating the original extension and releasing it under the MIT License, which has made this adaptation possible.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
