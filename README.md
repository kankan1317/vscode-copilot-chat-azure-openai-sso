# Azure OpenAI Studio Chat Extension

[English](README.md) | [日本語](README.ja.md)


> **Note**: This project is a modified version of the [GitHub Copilot Chat extension](https://github.com/microsoft/vscode-copilot-chat) by Microsoft. It has been adapted to work with Azure OpenAI Studio instead of GitHub Copilot, using Azure Entra ID authentication.

A VS Code extension that provides AI-powered chat and coding assistance using Azure OpenAI Studio with Azure Entra ID authentication.

## Attribution

This extension is based on the [GitHub Copilot Chat extension](https://github.com/microsoft/vscode-copilot-chat) (Copyright (c) Microsoft Corporation). The original extension has been modified to:
- Replace GitHub authentication with Azure Entra ID authentication
- Connect to Azure OpenAI Studio endpoints instead of GitHub Copilot API
- Remove GitHub-specific features and branding
- Adapt the user interface for Azure OpenAI Studio

All modifications are released under the same MIT License as the original project.

## Features

- **Azure Entra ID Authentication**: Secure authentication using Microsoft Azure Entra ID (formerly Azure Active Directory)
- **Azure OpenAI Integration**: Direct integration with Azure OpenAI Studio endpoints
- **AI Chat Interface**: Conversational AI assistance for coding tasks
- **Code Generation**: AI-powered code suggestions and completions
- **Multi-language Support**: Works with Java, PHP, Python, JavaScript, Ruby, Go, C#, C++, and more

## Prerequisites

- Visual Studio Code 1.107.0 or later
- Node.js 22.14.0 or later
- Azure OpenAI Studio account with appropriate permissions
- Azure Entra ID credentials

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/azure-openai-chat.git
   cd azure-openai-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Package the extension:
   ```bash
   npm run package
   ```

5. Install the `.vsix` file in VS Code:
   - Open VS Code
   - Go to Extensions view (Ctrl+Shift+X)
   - Click the "..." menu and select "Install from VSIX..."
   - Select the generated `.vsix` file

## Configuration

The extension uses Azure Entra ID for authentication by default. No additional configuration is required for basic usage.

### Advanced Configuration

You can configure Azure OpenAI models in VS Code settings:

```json
{
  "github.copilot.chat.azureModels": {
    "your-model-id": {
      "name": "Your Model Name",
      "url": "https://your-endpoint.openai.azure.com",
      "toolCalling": true,
      "vision": false,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    }
  }
}
```

## Development

### Using Docker

The project includes Docker configuration for consistent development environment:

```bash
# Build and start the container
docker compose build
docker compose up -d

# Enter the container
docker compose exec dev bash

# Run tests
docker compose exec dev npm run test:unit

# Run TypeScript check
docker compose exec dev npm run typecheck
```

### Local Development

```bash
# Install dependencies
npm install

# Run tests
npm run test:unit

# Type check
npm run typecheck

# Build
npm run build

# Watch mode
npm run watch
```

## Testing

```bash
# Run unit tests
npm run test:unit

# Run all tests
npm test

# Type checking
npm run typecheck
```

## Key Differences from GitHub Copilot

This extension differs from the original GitHub Copilot Chat extension in the following ways:

1. **Authentication**: Uses Azure Entra ID instead of GitHub authentication
2. **API Endpoints**: Connects to Azure OpenAI Studio endpoints instead of GitHub Copilot API
3. **Branding**: Updated to reflect Azure OpenAI Studio
4. **Inline Completions**: Disabled to prevent GitHub-specific features

## Architecture

- **Authentication**: `src/platform/authentication/` - Azure Entra ID integration
- **Azure Provider**: `src/extension/byok/vscode-node/azureProvider.ts` - Azure OpenAI model provider
- **Endpoint**: `src/extension/byok/node/azureOpenAIEndpoint.ts` - Azure-specific endpoint handling
- **Configuration**: `src/platform/configuration/` - Extension settings and configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.

## Acknowledgments

This project is based on the [GitHub Copilot Chat extension](https://github.com/microsoft/vscode-copilot-chat) by Microsoft. We are grateful for their work on the original extension.

## Privacy and Data

This extension uses Azure OpenAI Studio services. Please review:
- [Microsoft Privacy Statement](https://privacy.microsoft.com/privacystatement)
- [Azure OpenAI Service Data Privacy](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy)

The extension respects the `telemetry.telemetryLevel` setting in VS Code. Learn more at https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow Microsoft's Trademark & Brand Guidelines. Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party's policies.
