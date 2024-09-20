import React from "react";
import {
  AiGeneratedDisclaimer,
  CopilotProvider,
  UserMessage,
  PromptStarter,
  FeedbackButtons,
  SensitivityTooltip,
  SensitivityIcon,
  Attachment,
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
  isLoading: boolean;
}

const Chat: React.FC<ChatProps> = ({ messages, isLoading }) => {
  const styles = useStyles();

  const [selected, setSelected] = React.useState<
    "positive" | "negative" | undefined
  >(undefined);
  const handlePositiveFeedback = () => {
    setSelected(selected === "positive" ? undefined : "positive");
  };

  const handleNegativeFeedback = () => {
    setSelected(selected === "negative" ? undefined : "negative");
  };

  const feedback = (
    <FeedbackButtons
      selected={selected}
      positiveFeedbackButton={{ onClick: handlePositiveFeedback }}
      positiveFeedbackTooltip={{
        content:
          selected === "positive" ? "Like, Feedback already provided" : "Like",
      }}
      negativeFeedbackButton={{ onClick: handleNegativeFeedback }}
      negativeFeedbackTooltip={{
        content:
          selected === "negative"
            ? "Dislike, Feedback already provided"
            : "Dislike",
      }}
    />
  );

  const sensitivity = (
    <SensitivityTooltip
      heading="Confidential \\ Market FTE"
      withBackplate
      message="Data is classified and protected. Market Full Time Employees (FTE) can edit, reply, forward and print."
    >
      <SensitivityIcon fillColor="orange" withLock />
    </SensitivityTooltip>
  );

  const openTicket = (
    <Attachment
      primaryAction={{ onClick: () => {} }}
      id="attachment-1"
    >
      Open ticket
    </Attachment>
  );

  const messagesInContainers = messages.map((message, index) => {
    if (message.role === "user")
      return <UserMessage>{message.content as string}</UserMessage>;

    const isLoadingAssistantMessage = String(message.content).includes("Search");
    const isOpenTicketMessage = String(message.content).includes("repair ticket");
    const isLatestMessage = index === messages.length - 1;

    return (
      <Stack>
        <CopilotMessage
          progress={
            isLoadingAssistantMessage ? { value: undefined } : undefined
          }
          loadingState={isLoading && isLoadingAssistantMessage ? "loading" : "none"}
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
          <Stack horizontal>
            {!isLoading && !isLoadingAssistantMessage && sensitivity}
            {!isLoading && !isLoadingAssistantMessage && feedback}
            {!isLoading && isOpenTicketMessage && openTicket}
          </Stack>
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
