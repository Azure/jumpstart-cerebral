import React from 'react';

import { webLightTheme, FluentProvider, Text } from '@fluentui/react-components';
import { OutputCard } from '@fluentui-copilot/react-copilot';
import { CopilotProvider } from '@fluentui-copilot/react-copilot';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <CopilotProvider
        mode="sidecar" //or 'canvas'
        themeExtension={{
          colorBrandFlair1: 'red', // replace with your brand colors
          colorBrandFlair2: 'blue',
          colorBrandFlair3: 'green',
        }}
      >
        <OutputCard progress={{ value: undefined }} isLoading>
          <Text>Welcome to Fluent AI Copilot</Text>
        </OutputCard>
      </CopilotProvider>
    </FluentProvider>
  );
}

export default App;
