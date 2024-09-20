import {
  ChatInput,
  ChatInputSubmitEvents,
  EditorInputValueData,
  ImperativeControlPlugin,
  ImperativeControlPluginRef,
  Suggestion,
  SuggestionList,
} from "@fluentui-copilot/react-copilot";
import { Stack } from "@fluentui/react";
import React, { useRef } from "react";

interface InputChatProps {
  onSubmitQuestion: (question: string) => void;
  onsubmitSuggestion: (suggestion: { type: string; value: string }) => void;
  disabled?: boolean;
}

const InputChat: React.FC<InputChatProps> = ({
  onSubmitQuestion,
  onsubmitSuggestion,
  disabled,
}) => {
  const controlRef = useRef<ImperativeControlPluginRef>(null);

  const handleSubmit = (
    _: ChatInputSubmitEvents,
    data: EditorInputValueData
  ) => {
    controlRef.current?.setInputText("");
    onSubmitQuestion(data.value);
  };

  const onSuggestionClick = (type: string, text: string) => {
    onsubmitSuggestion({ type: type, value: text});
  };

  return (
    <Stack grow={4}>
      <SuggestionList>
        <Suggestion onClick={() => onSuggestionClick('notification', 'Send the notification to team')}>
          Send the notification to team
        </Suggestion>
        <Suggestion onClick={() => onSuggestionClick('ticket', 'Create the repair ticket')}>
          Create the repair ticket
        </Suggestion>
      </SuggestionList>
      <ChatInput
        style={{ width: "100%" }}
        placeholderValue="Describe what you'd like to do or use / to reference files, people and more"
        showCount
        onSubmit={handleSubmit}
        disabled={disabled}
      >
        <ImperativeControlPlugin ref={controlRef} />
      </ChatInput>
    </Stack>
  );
};

export default InputChat;
