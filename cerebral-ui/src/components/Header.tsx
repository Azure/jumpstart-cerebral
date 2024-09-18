import { Stack, IStackProps, ITheme, IThemeRules, DefaultPalette } from "@fluentui/react";
import { Text } from "@fluentui/react-components";

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
      backgroundColor: DefaultPalette.themeTertiary,
      minHeight: 47,
      padding: '0 32px',
      boxShadow: theme.effects.elevation16,
    },
  });

const Header: React.FC = () => {
    return(
    <Stack horizontal enableScopedSelectors horizontalAlign="space-between" verticalAlign="center" grow={0} styles={headerStackStyles} color="grey">
        <Stack horizontal horizontalAlign="start">
          <Text size={500}>MegaMart</Text>
        </Stack>
        <Stack horizontal horizontalAlign="center">
          <Text size={500}>Search</Text>
        </Stack>
        <Stack horizontal horizontalAlign="center">
          <Text size={500}>Profile</Text>
        </Stack>
      </Stack>
    );
};

export default Header;