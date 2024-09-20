import {
  ChatInput,
  ChatInputSubmitEvents,
  EditorInputValueData,
  ImperativeControlPlugin,
  ImperativeControlPluginRef,
} from "@fluentui-copilot/react-copilot";
import React, { useRef } from "react";

interface InputChatProps {
  onSubmitQuestion: (question: string) => void;
  disabled?: boolean;
}

const InputChat: React.FC<InputChatProps> = ({
  onSubmitQuestion,
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

  return (
    <ChatInput
      style={{ width: "100%" }}
      placeholderValue="Describe what you'd like to do or use / to reference files, people and more"
      showCount
      onSubmit={handleSubmit}
      disabled={disabled}
    >
      <ImperativeControlPlugin ref={controlRef} />
    </ChatInput>
  );
};

export default InputChat;
