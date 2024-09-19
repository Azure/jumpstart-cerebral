import React, { useEffect, useState } from 'react';
import {
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderTitle,
  InlineDrawer,
  useRestoreFocusSource,
} from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons';
import Chat from './Copilot/Chat';
import InputChat from './Copilot/InputChat';

interface CopilotProps {
  isOpen: boolean;
}

const Copilot: React.FC<CopilotProps> = ({
  isOpen
}) => {
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  const [messages, setMessages] = useState<any[]>([]);

  const drawerHeader = (
    <DrawerHeader>
      <DrawerHeaderTitle
        action={
          <Button
            appearance="subtle"
            aria-label="Close"
            icon={<Dismiss24Regular />}
          />
        }
      >
        Copilot
      </DrawerHeaderTitle>
    </DrawerHeader>
  );

  const drawerBody = (
    <DrawerBody tabIndex={0} role="group" aria-label="Chat">
      <Chat
              messages={messages}
        />
    </DrawerBody>
  );

  const drawerFooter = (
    <DrawerFooter>
      <InputChat
      />
    </DrawerFooter>
  );

  return (
    <InlineDrawer
      separator
      as="aside"
      position="end"
      {...restoreFocusSourceAttributes}
      open={isOpen}
      style={{ width: '25%' }}
    >
      {drawerHeader}
      {drawerBody}
      {drawerFooter}
    </InlineDrawer>
  );
};

export default Copilot;
