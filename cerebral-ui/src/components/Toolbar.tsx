import { Stack, IStackProps, ITheme, IThemeRules, DefaultPalette } from "@fluentui/react";
import { Button, Text } from "@fluentui/react-components";

export interface IHeaderProps {
    themeRules?: IThemeRules;
  }
  
  export interface IHeaderState {
    showPanel: boolean;
    jsonTheme: string;
    powershellTheme: string;
    themeAsCode: any;
  }
  
  const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
    root: {
      backgroundColor: DefaultPalette.white,
      minHeight: 47,
      padding: '0 32px',
      boxShadow: theme.effects.elevation16,
    },
  });

const Toolbar: React.FC = () => {
    return(
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center" grow={0} styles={headerStackStyles} color="grey">
        <Stack horizontal horizontalAlign="start">
            <Button>+ Configure Application</Button>
        </Stack>
        <Stack horizontal horizontalAlign="start">
            <Button>Refresh</Button>
        </Stack>
        <Stack horizontal horizontalAlign="center">
            <Button>Deploy</Button>
        </Stack>
        <Stack horizontal horizontalAlign="center">
            <Button>Delete</Button>
        </Stack>
        <Stack horizontal horizontalAlign="center">
            <Button>Summary</Button>
        </Stack>

      </Stack>
    );
};

export default Toolbar;