import {
    ChatInput,
    ChatInputSubmitEvents,
    EditorInputValueData,
    ImperativeControlPlugin,
    ImperativeControlPluginRef,
  } from '@fluentui-copilot/react-copilot';
  import React, { useRef } from 'react';
  
  interface InputChatProps {
  }
  
  const InputChat: React.FC<InputChatProps> = () => {
    const controlRef = useRef<ImperativeControlPluginRef>(null);
  
    const handleSubmit = (_: ChatInputSubmitEvents, data: EditorInputValueData) => {
      controlRef.current?.setInputText('');
    };
  
    return (
      <ChatInput
        style={{ width: '100%' }}
        placeholderValue="Describe what you'd like to do or use / to reference files, people and more"
        showCount
        onSubmit={handleSubmit}
      >
        <ImperativeControlPlugin ref={controlRef} />
      </ChatInput>
    );
  };
  
  export default InputChat;
  