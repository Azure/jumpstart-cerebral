import React from "react";
import {
  AiGeneratedDisclaimer,
  CopilotProvider,
  UserMessage,
  PromptStarter,
} from "@fluentui-copilot/react-copilot";
import {
  CopilotChat,
  CopilotMessageV2 as CopilotMessage,
} from "@fluentui-copilot/react-copilot-chat";
import {
  Avatar,
  Body1,
  shorthands,
  tokens,
  makeStyles,
  Text,
  Divider,
} from "@fluentui/react-components";
import { Stack } from "@fluentui/react";
import ZeroPrompt from "./ZeroPrompt";

const useStyles = makeStyles({
  provider: {
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: "100%",
  },
  chat: {
    minHeight: "100%",
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
    overflowY: "auto",
  },
});

interface ChatProps {
  messages: any[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const styles = useStyles();

  const disclaimer = (
    <AiGeneratedDisclaimer
      style={{ backgroundColor: "transparent", paddingTop: 10 }}
    >
      AI-generated content may be incorrectd
    </AiGeneratedDisclaimer>
  );

  const messagesInContainers = messages.slice(1).map((message, index) => {
    if (message.role === "user")
      return <UserMessage>{message.content as string}</UserMessage>;

    const isLoadingAssistantMessage = index === messages.length - 2;

    return (
      <Stack>
        <CopilotMessage
          progress={
            isLoadingAssistantMessage ? { value: undefined } : undefined
          }
          loadingState="none"
          defaultFocused
          name="Copilot"
          avatar={
            <Avatar
              size={24}
              image={{
                src: "https://res-2-sdf.cdn.office.net/files/fabric-cdn-prod_20240411.001/assets/brand-icons/product/svg/copilot_24x1.svg",
              }}
            />
          }
        >
          <Body1>Hi Kat,</Body1>
          <Body1>
            Ready to explore? Select one of the suggestions below to get
            started...
          </Body1>
        </CopilotMessage>
        <CopilotMessage
          progress={
            isLoadingAssistantMessage ? { value: undefined } : undefined
          }
          loadingState="none"
          defaultFocused
          name="Copilot"
          avatar={
            <Avatar
              size={24}
              image={{
                src: "https://res-2-sdf.cdn.office.net/files/fabric-cdn-prod_20240411.001/assets/brand-icons/product/svg/copilot_24x1.svg",
              }}
            />
          }
        >
          <div
            dangerouslySetInnerHTML={{ __html: message.content as string }}
          />
          {disclaimer}
        </CopilotMessage>
      </Stack>
    );
  });

  return (
    <CopilotProvider mode="sidecar" style={{ height: "100%" }}>
      <Stack className={styles.provider} verticalAlign="space-between">
        <CopilotChat className={styles.chat}>
          <ZeroPrompt />
          {messagesInContainers}
        </CopilotChat>
      </Stack>
    </CopilotProvider>
  );
};

export default Chat;
