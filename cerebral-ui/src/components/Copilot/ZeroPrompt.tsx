import * as React from "react";
import { PromptStarter } from "@fluentui-copilot/react-prompt-starter";
import { OutputCard } from "@fluentui-copilot/react-output-card";
import { Eye16Regular, Grid16Regular, Poll16Regular, Bot20Regular } from "@fluentui/react-icons";
import { makeStyles, tokens, Body1 } from "@fluentui/react-components";

const useStyles = makeStyles({
    card: {
      rowGap: tokens.spacingHorizontalM,
    },
    prompts: {
      display: "flex",
      flexDirection: "column",
      rowGap: tokens.spacingHorizontalS,
    },
    promptHighlight: {
      color: tokens.colorBrandForegroundLink,
    },
});

interface ZeroPromptProps {
}

const ZeroPrompt: React.FC<ZeroPromptProps> = () => {
  const styles = useStyles();
  return (
    <OutputCard className={styles.card}>
      <Body1>Hi there,</Body1>

      <Body1>
        How can I help you?
      </Body1>
    </OutputCard>
  );
};

export default ZeroPrompt;
