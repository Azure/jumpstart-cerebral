import * as React from 'react';
import {
  MessageBar,
  MessageBarTitle,
  MessageBarBody,
  Button,
  MessageBarActions,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";

const Message: React.FC = () => {
    return(
      <MessageBar intent={'error'}>
        <MessageBarBody>
          <MessageBarTitle>HotMelt sensor has errors</MessageBarTitle>
          Copilot detects that the HotMelt sensor in FFR2 line has errors happened in 3 hours ago
        </MessageBarBody>
        <MessageBarActions
        containerAction={
          <Button appearance="transparent" icon={<DismissRegular />} />
        }
      ></MessageBarActions>
    </MessageBar>
    );
};

export default Message;