import React from 'react';
import {
  AiGeneratedDisclaimer,
  CopilotChat,
  CopilotMessage,
  CopilotProvider,
  UserMessage,
} from '@fluentui-copilot/react-copilot';
import {
  shorthands,
  tokens,
  makeStyles,
  Text,
  Divider,
} from '@fluentui/react-components';
import { Stack } from '@fluentui/react';
import ZeroPrompt from './ZeroPrompt';

const useStyles = makeStyles({
  provider: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100%',
  },
  chat: {
    minHeight: '100%',
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    overflowY: 'auto',
  },
});

interface ChatProps {
  messages: any[];
}

const Chat: React.FC<ChatProps> = ({
  messages
}) => {
  const styles = useStyles();

  const disclaimer = (
    <AiGeneratedDisclaimer
      style={{ backgroundColor: 'transparent', paddingTop: 10 }}
    >
      AI-generated content may be incorrectd
    </AiGeneratedDisclaimer>
  );

  const messagesInContainers = messages.slice(1).map((message, index) => {
    if (message.role === 'user')
      return <UserMessage>{message.content as string}</UserMessage>;

    const isLoadingAssistantMessage = index === messages.length - 2;

    return (
      <CopilotMessage
        progress={isLoadingAssistantMessage ? { value: undefined } : undefined}
        isLoading={isLoadingAssistantMessage}
        defaultFocused
      >
         <div dangerouslySetInnerHTML={{ __html: message.content as string }} />
        {disclaimer}
      </CopilotMessage>
    );
  });

  return (
    <CopilotProvider mode="sidecar" style={{height: "100%"}}>
      <Stack className={styles.provider} verticalAlign="space-between">
        <CopilotChat className={styles.chat}>
          <ZeroPrompt
          />

          {messagesInContainers}
        </CopilotChat>
      </Stack>
    </CopilotProvider>
  );
};

export default Chat;
