import { Stack, IStackProps, ITheme, IThemeRules, DefaultPalette, IconButton, IIconProps } from "@fluentui/react";
import { Avatar, Text } from "@fluentui/react-components";
import { SearchBox } from "@fluentui/react-search-preview";

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
    minHeight: 47,
    padding: '0 32px',
    boxShadow: theme.effects.elevation4,
},
});

const addIcon: IIconProps = { iconName: 'MailAlert' };
const copilotIcon: IIconProps = { iconName: 'Robot' };

const Header: React.FC = () => {
    return(
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center" grow={0} styles={headerStackStyles} color="grey">
        <Stack horizontal horizontalAlign="start">
          <Text size={500}>Cerebral</Text>
        </Stack>
        <Stack horizontal horizontalAlign="center">
            <IconButton iconProps={addIcon} aria-label="Emoji" />
            <Avatar name="Zein Chad" />
        </Stack>
      </Stack>
    );
};

export default Header;