import React from 'react';

import { webLightTheme, FluentProvider, Text } from '@fluentui/react-components';
import { OutputCard } from '@fluentui-copilot/react-copilot';
import { CopilotProvider } from '@fluentui-copilot/react-copilot';
import { tokens, makeStyles, shorthands } from '@fluentui/react-components';
import './App.css';
const useStyles = makeStyles({
  instance0AIOheader: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    "display": "flex",
    "width": "1920px",
    "height": "48px",
    "align-items": "flex-start",
    "flex-shrink": "0",
  },
  text0Productnam: {
    fontFamily: "Segoe UI",
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
    // color: tokens.colorNeutralBackgroundStatic,
    color: "#333333",
  },
  frame100BaseDashbo: {
    backgroundColor: tokens.colorNeutralStroke3,
    background: "#F5F5F5",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
    "display": "flex",
    "width": "1920px",
    "height": "1080px",
    "flex-direction": "column",
    "align-items": "flex-start",
    "box-shadow": "0px 8px 16px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
  },
  frame21Nav: {
    paddingBlockStart: "28px",
    background: "#E0E0E0",
    "display": "flex",
    "height": "192px",
    "flex-direction": "column",
    "align-items": "flex-start",
    "flex-shrink": "0",
    "align-self": "stretch",
    
  },
  frame1Tab: {
    paddingInlineStart: "48px",
    // rowGap: tokens.spacingVerticalMNudge,
    rowGap: "10px",
    "display": "flex",
    "flex-direction": "column",
    "align-items": "flex-start",
  },
  frame0Tab: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
    "width": "360px",
    "height": "var(--Component-semantic-Header-icon, 44px)",
  },
  frame4Nav: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    padding: "0px 158px 0px 96px",
    "display": "flex",
    "height": "72px",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "flex-start",
    "flex-shrink": "0",
    "align-self": "stretch",
  },
  frame3Search: {
    paddingInlineStart: "96px",
    paddingInlineEnd: "158px",
    // rowGap: tokens.spacingVerticalMNudge,
    rowGap: "10px",
    background: "#F5F5F5",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    "display": "flex",
    "flex-direction": "column",
    "align-items": "flex-start",
    "align-self": "stretch",
  },
  frame2Search: {
    backgroundColor: tokens.colorSubtleBackgroundHover,
    background: "#F5F5F5",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    "height": "32px",
    "align-self": "stretch",
  },
  frame19IgniteSuit: {
    backgroundColor: tokens.colorSubtleBackgroundHover,
    background: "#F5F5F5",
    "display": "flex",
    "width": "1920px",
    "justify-content": "space-between",
    "align-items": "center",
  },
  frame7WaffleAppn: {
    "display": "flex",
    "width": "218px",
    "align-items": "flex-start",
    "flex-shrink": "0",
  },
  frame6Appnamepre: {
    paddingInlineStart: "40px",
    // paddingInlineEnd: tokens.spacingHorizontalS,
    paddingInlineEnd: "8px",
    // paddingBlockStart: tokens.spacingVerticalM,
    paddingBlockStart: "12px",
    paddingBlockEnd: "14px",
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "height": "48px",
    "justify-content": "center",
    "align-items": "center",
  },
  text5Productnam: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
    // color: tokens.colorNeutralBackgroundStatic,
    color: "#333333",
  },
  frame18Actiongrou: {
    paddingInlineStart: tokens.spacingHorizontalXXL,
    paddingInlineEnd: tokens.spacingHorizontalXXL,
    "display": "flex",
    "justify-content": "flex-end",
    "align-items": "center",
  },
  frame17Frame21171: {
    "display": "flex",
    "align-items": "center",
  },
  instance9Notificati: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: "14px",
    paddingInlineEnd: "14px",
    paddingBlockStart: "14px",
    paddingBlockEnd: "14px",
    "display": "flex",
    "align-items": "flex-start",
  },
  instance8Alert: {
    "width": "20px",
    "height": "20px",
  },
  instance11Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    // paddingInlineStart: tokens.spacingHorizontalM,
    // paddingInlineEnd: tokens.spacingHorizontalM,
    paddingInlineStart: "12px",
    paddingInlineEnd: "12px",
    // paddingBlockStart: tokens.spacingVerticalSNudge,
    // paddingBlockEnd: tokens.spacingVerticalSNudge,
    paddingBlockStart: "6px",
    paddingBlockEnd: "6px",
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "width": "var(--Line-height-700, 34px)",
    "justify-content": "center",
    "align-items": "center",
  },
  instance10Copilot: {
    "width": "20px",
    "height": "20px",
    "flex-shrink": "0",
  },
  frame16Accountman: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    // paddingInlineStart: tokens.spacingHorizontalSNudge,
    // paddingInlineEnd: tokens.spacingHorizontalSNudge,
    paddingInlineStart:  "12px",
    paddingInlineEnd:  "12px",
    // paddingBlockStart: tokens.spacingVerticalSNudge,
    // paddingBlockEnd: tokens.spacingVerticalSNudge,
    paddingBlockStart: "6px",
    paddingBlockEnd: "6px",
    "display": "flex",
    "align-items": "flex-start",
  },
  frame15Initials: {
    "width": "var(--Line-height-700, 36px)",
    "height": "var(--Line-height-700, 36px)",
  },
  frame12Avatarimag: {
    borderTopLeftRadius: tokens.borderRadiusCircular,
    borderTopRightRadius: tokens.borderRadiusCircular,
    borderBottomLeftRadius: tokens.borderRadiusCircular,
    borderBottomRightRadius: tokens.borderRadiusCircular,
    "width": "var(--Line-height-700, 36px)",
    "height": "var(--Line-height-700, 36px)",
    "flex-shrink": "0",
  },
  ellipse13Ellipse498: {
    color: "#e7ced1",
    "width": "20px",
    "height": "20px",
    "flex-shrink": "0",
    "fill": "#E7CED1",
  },
  text14ZC: {
    fontSize: "13.090909004211426px",
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: "18px",
    color: "#52131a",
  },
  instance20AIOheader: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    "display": "flex",
    "width": "1920px",
    "height": "48px",
    "align-items": "flex-start",
    "flex-shrink": "0",
  },
  frame99LRList: {
    "display": "flex",
    "align-items": "flex-start",
     ...shorthands.flex(1,0,0),
    "align-self": "stretch",
  },
  frame37Leftrail: {
    backgroundColor: tokens.colorSubtleBackgroundHover,
    background: "#F5F5F5",
    paddingBlockStart: tokens.spacingVerticalXXL,
    paddingBlockEnd: tokens.spacingVerticalXXL,
    rowGap: tokens.spacingVerticalL,
    "display": "flex",
    "width": "64px",
    "flex-direction": "column",
    "align-items": "center",
    "align-self": "stretch",
  },
  frame36Tabs: {
    "display": "flex",
    "flex-direction": "column",
    "align-items": "flex-start",
  },
  frame24Tab: {
    // paddingInlineStart: tokens.spacingHorizontalXS,
    paddingInlineStart: "4px;",
    // paddingInlineEnd: tokens.spacingHorizontalXS,
    paddingInlineEnd: "4px;",
    paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    rowGap: tokens.spacingVerticalXXS,
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
  },
  instance22Home: {
    "width": "24px",
    "height": "24px",
  },
  text23Home: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase100,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
    "width": "60px",
    "text-align": "center",
  },
  frame29Tab: {
    // paddingInlineStart: tokens.spacingHorizontalXS,
    paddingInlineStart: "4px;",
    // paddingInlineEnd: tokens.spacingHorizontalXS,
    paddingInlineEnd: "4px;",
    paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    rowGap: tokens.spacingVerticalXXS,
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
  },
  instance25Apps: {
    "width": "24px",
    "height": "24px",
  },
  text26Applicatio: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase100,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
    "width": "60px",
    "text-align": "center",
  },
  frame28Frame6: {
    paddingBlockStart: tokens.spacingVerticalXXS,
    paddingBlockEnd: tokens.spacingVerticalXXS,
    "display": "flex",
    "height": "56px",
    "align-items": "flex-start",
    "position": "absolute",
    "left": "2px",
  },
  frame27Indicator: {
    backgroundColor: tokens.colorCompoundBrandStroke,
    background: "#0F6CBD",
    borderTopLeftRadius: tokens.borderRadiusXLarge,
    borderTopRightRadius: tokens.borderRadiusXLarge,
    borderBottomLeftRadius: tokens.borderRadiusXLarge,
    borderBottomRightRadius: tokens.borderRadiusXLarge,
    "display": "flex",
    "width": "2px",
    "flex-direction": "column",
    "align-items": "flex-start",
    "align-self": "stretch",
  },
  frame32Tab: {
      // paddingInlineStart: tokens.spacingHorizontalXS,
      paddingInlineStart: "4px;",
      // paddingInlineEnd: tokens.spacingHorizontalXS,
      paddingInlineEnd: "4px;",paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    rowGap: tokens.spacingVerticalXXS,
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
  },
  instance30Feed: {
    "width": "24px",
    "height": "24px",
  },
  text31Tasks: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase100,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
    "width": "60px",
    "text-align": "center",
  },
  frame35Tab: {
    // paddingInlineStart: tokens.spacingHorizontalXS,
    paddingInlineStart: "4px;",
    // paddingInlineEnd: tokens.spacingHorizontalXS,
    paddingInlineEnd: "4px;",
    paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    rowGap: tokens.spacingVerticalXXS,
    "display": "flex",
    "flex-direction": "column",
    "align-items": "center",
  },
  instance33Placeholde: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    "width": "24px",
    "height": "24px",
  },
  text34Section: {
    fontSize: tokens.fontSizeBase100,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase100,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
    "width": "60px",
    "text-align": "center",
  },
  frame98Cards: {
    backgroundColor: tokens.colorNeutralStencil2,
    paddingInlineStart: tokens.spacingHorizontalXXXL,
    paddingInlineEnd: tokens.spacingHorizontalXXXL,
    paddingBlockStart: tokens.spacingVerticalXXXL,
    paddingBlockEnd: "97px",
    rowGap: tokens.spacingVerticalL,
    "display": "flex",
    "width": "1856px",
    "height": "888px",
    "flex-direction": "column",
    "align-items": "flex-start",
    "box-shadow": "0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
  },
  frame97Frame21171: {
    rowGap: tokens.spacingVerticalL,
    "display": "flex",
    "height": "792px",
    "flex-direction": "column",
    "align-items": "flex-start",
    "flex-shrink": "0",
    "align-self": "stretch",
  },
  instance50Breadcrumb: {
    "display": "flex",
    "align-items": "flex-start",
  },
  instance44Breadcrumb: {
    "display": "flex",
    "align-items": "center",
  },
  instance41Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    // paddingInlineStart: tokens.spacingHorizontalS,
    // paddingInlineEnd: tokens.spacingHorizontalS,
    paddingInlineStart: "8px",
    paddingInlineEnd: "8px",

    paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  frame40Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "height": "24px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame39Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text38Text: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase400,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
  },
  frame43Divider: {
    "display": "flex",
    "align-items": "center",
  },
  instance42Chevron: {
    "width": "20px",
    "height": "20px",
  },
  instance49Breadcrumb: {
    "display": "flex",
    "align-items": "center",
  },
  instance48Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    // paddingInlineStart: tokens.spacingHorizontalS,
    // paddingInlineEnd: tokens.spacingHorizontalS,
    paddingInlineStart: "8px",
    paddingInlineEnd: "8px",    
    paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  frame47Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "height": "24px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame46Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text45Text: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
  },
  text51Applicatio: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase500,
    color: tokens.colorNeutralForeground1Static,
  },
  frame65MessageBar: {
    backgroundColor: tokens.colorStatusDangerBackground1,
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalS,
    columnGap: "8px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "align-self": "stretch",
  },
  instance52Icon: {
    "width": "20px",
    "height": "20px",
  },
  frame56Textandlin: {
    // paddingBlockStart: tokens.spacingVerticalMNudge,
    paddingBlockStart: "10px",
    // paddingBlockEnd: tokens.spacingVerticalMNudge,
    paddingBlockEnd: "10px",
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "align-items": "center",
     ...shorthands.flex(1,0,0),
  },
  frame54Title: {
    // paddingInlineEnd: tokens.spacingHorizontalXS,
    paddingInlineEnd: "4px;",
    "display": "flex",
    "align-items": "flex-start",
  },
  text53Text: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1Static,
  },
  text55Bodycopy: {
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase200,
    color: tokens.colorNeutralForeground1Static,
  },
  frame64Containera: {
    paddingBlockStart: tokens.spacingVerticalSNudge,
    paddingBlockEnd: tokens.spacingVerticalSNudge,
    // columnGap: tokens.spacingHorizontalS,
    columnGap: "8px",
    "display": "flex",
    "justify-content": "flex-end",
    "align-items": "center",
  },
  instance61Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    paddingBlockStart: tokens.spacingVerticalXXS,
    paddingBlockEnd: tokens.spacingVerticalXXS,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  instance57Copilot: {
    "width": "20px",
    "height": "20px",
  },
  frame60Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "height": "20px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame59Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text58Text: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    color: tokens.colorNeutralForeground1Static,
  },
  instance63Dismiss: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: tokens.spacingHorizontalXXS,
    paddingInlineEnd: tokens.spacingHorizontalXXS,
    paddingBlockStart: tokens.spacingVerticalXXS,
    paddingBlockEnd: tokens.spacingVerticalXXS,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    "display": "flex",
    "height": "24px",
    "justify-content": "center",
    "align-items": "center",
  },
  instance62Dismiss: {
    "width": "20px",
    "height": "20px",
  },
  instance92Toolbar: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    columnGap: "54px",
    "display": "flex",
    "width": "1792px",
    "height": "48px",
    "align-items": "flex-start",
    "flex-shrink": "0",
    "box-shadow": "0px 4px 8px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
  },
  frame91Startconte: {
    paddingInlineStart: tokens.spacingHorizontalXL,
    paddingBlockStart: tokens.spacingVerticalS,
    paddingBlockEnd: tokens.spacingVerticalS,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    "display": "flex",
    "align-items": "flex-start",
     ...shorthands.flex(1,0,0),
  },
  instance70Button: {
    backgroundColor: tokens.colorCompoundBrandStroke,
    background: "#0F6CBD",
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    paddingBlockStart: tokens.spacingVerticalSNudge,
    paddingBlockEnd: tokens.spacingVerticalSNudge,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  instance66Add: {
    "width": "20px",
    "height": "20px",
  },
  frame69Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "height": "20px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame68Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text67Text: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    // color: tokens.colorStrokeFocus1,
    color: "#FFFFFF",
  },
  instance75Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    paddingBlockStart: tokens.spacingVerticalSNudge,
    paddingBlockEnd: tokens.spacingVerticalSNudge,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  instance71ArrowClock: {
    "width": "20px",
    "height": "20px",
  },
  frame74Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "height": "20px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame73Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text72Text: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
  },
  instance80Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    paddingBlockStart: tokens.spacingVerticalSNudge,
    paddingBlockEnd: tokens.spacingVerticalSNudge,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  instance76ContractUp: {
    "width": "20px",
    "height": "20px",
  },
  frame79Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",    
    "display": "flex",
    "height": "20px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame78Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text77Text: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
  },
  instance85Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    paddingBlockStart: tokens.spacingVerticalSNudge,
    paddingBlockEnd: tokens.spacingVerticalSNudge,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  instance81Delete: {
    "width": "20px",
    "height": "20px",
  },
  frame84Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",    
    "display": "flex",
    "height": "20px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame83Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text82Text: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
  },
  instance90Button: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    paddingInlineStart: tokens.spacingHorizontalM,
    paddingInlineEnd: tokens.spacingHorizontalM,
    paddingBlockStart: tokens.spacingVerticalSNudge,
    paddingBlockEnd: tokens.spacingVerticalSNudge,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderBottomRightRadius: tokens.borderRadiusMedium,
    // columnGap: tokens.spacingHorizontalSNudge,
    columnGap: "6px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  instance86Copilot: {
    "width": "20px",
    "height": "20px",
  },
  frame89Container: {
    // columnGap: tokens.spacingHorizontalXS,
    columnGap: "4px;",
    "display": "flex",
    "height": "20px",
    "justify-content": "center",
    "align-items": "center",
  },
  frame88Textwrappe: {
    "display": "flex",
    "align-items": "flex-start",
  },
  text87Text: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase300,
    // color: tokens.colorNeutralForeground2Link,
    color: "#424242",
  },
  instance96Cursor: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    "width": "60px",
    "height": "60px",
    "position": "absolute",
    "right": "76px",
    "top": "106px",
  },
  ellipse93Ellipse: {
    color: "#9b51e0",
    "width": "60px",
    "height": "60px",
    "flex-shrink": "0",
    "fill": "var(--9-b-51-e-0, #9B51E0)",
    "opacity": "0.1",
  },
  ellipse94Ellipse: {
    color: "#9b51e0",
    "width": "40px",
    "height": "40px",
    "flex-shrink": "0",
    "fill": "var(--9-b-51-e-0, #9B51E0)",
    "opacity": "0.1",
  },
  frame95handpointi: {
    backgroundColor: tokens.colorStrokeFocus1,
    background: "#FFFFFF",
    "width": "16px",
    "height": "17px",
    "flex-shrink": "0",
    "filter": "drop-shadow(0px 1px 2.6px rgba(0, 0, 0, 0.32))",
  },  
  });

function App() {
  const classes = useStyles();
  return (
    <div id="frame100BaseDashbo" className={classes.frame100BaseDashbo}>
    <div id="frame21Nav" className={classes.frame21Nav}>
      <div id="frame1Tab" className={classes.frame1Tab}>
        <div id="frame0Tab" className={classes.frame0Tab} />
      </div>
      <div id="frame4Nav" className={classes.frame4Nav}>
        <div id="frame3Search" className={classes.frame3Search}>
          <div id="frame2Search" className={classes.frame2Search} />
        </div>
      </div>
      <div id="frame19IgniteSuit" className={classes.frame19IgniteSuit}>
        <div id="frame7WaffleAppn" className={classes.frame7WaffleAppn}>
          <div id="frame6Appnamepre" className={classes.frame6Appnamepre}>
            <div id="text5Productnam" className={classes.text5Productnam}>Cerebral</div>
          </div>
        </div>
        <div className={classes.frame18Actiongrou}>
          <div className={classes.frame17Frame21171}>
            <div className={classes.instance9Notificati}>
              <div className={classes.instance8Alert} />
            </div>
            <div className={classes.instance11Button}>
              <div className={classes.instance10Copilot} />
            </div>
            <div className={classes.frame16Accountman}>
              <div className={classes.frame15Initials}>
                <div className={classes.frame12Avatarimag} />
                <div className={classes.ellipse13Ellipse498} />
                <div className={classes.text14ZC}>ZC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.instance20AIOheader} />
    </div>
    <div className={classes.frame99LRList}>
      <div className={classes.frame37Leftrail}>
        <div className={classes.frame36Tabs}>
          <div className={classes.frame24Tab}>
            <div className={classes.instance22Home} />
            <div className={classes.text23Home}>Home</div>
          </div>
          <div className={classes.frame29Tab}>
            <div className={classes.instance25Apps} />
            <div className={classes.text26Applicatio}>Applications</div>
            <div className={classes.frame28Frame6}>
              <div className={classes.frame27Indicator} />
            </div>
          </div>
          <div className={classes.frame32Tab}>
            <div className={classes.instance30Feed} />
            <div className={classes.text31Tasks}>Tasks</div>
          </div>
          <div className={classes.frame35Tab}>
            <div className={classes.instance33Placeholde} />
            <div className={classes.text34Section}>[Section]</div>
          </div>
        </div>
      </div>
      <div className={classes.frame98Cards}>
        <div className={classes.frame97Frame21171}>
          <div className={classes.instance50Breadcrumb}>
            <div className={classes.instance44Breadcrumb}>
              <div className={classes.instance41Button}>
                <div className={classes.frame40Container}>
                  <div className={classes.frame39Textwrappe}>
                    <div className={classes.text38Text}>Home</div>
                  </div>
                </div>
              </div>
              <div className={classes.frame43Divider}>
                <div className={classes.instance42Chevron} />
              </div>
            </div>
            <div className={classes.instance49Breadcrumb}>
              <div className={classes.instance48Button}>
                <div className={classes.frame47Container}>
                  <div className={classes.frame46Textwrappe}>
                    <div className={classes.text45Text}>Applications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.text51Applicatio}>Applications</div>
          <div className={classes.frame65MessageBar}>
            <div className={classes.instance52Icon} />
            <div className={classes.frame56Textandlin}>
              <div className={classes.frame54Title}>
                <div className={classes.text53Text}>HotMelt sensor has errors</div>
              </div>
              <div className={classes.text55Bodycopy}>Copilot detects that the HotMelt sensor in FFR2 line has errors happened in 3 hours ago</div>
            </div>
            <div className={classes.frame64Containera}>
              <div className={classes.instance61Button}>
                <div className={classes.instance57Copilot} />
                <div className={classes.frame60Container}>
                  <div className={classes.frame59Textwrappe}>
                    <div className={classes.text58Text}>Ask Copilot</div>
                  </div>
                </div>
              </div>
              <div className={classes.instance63Dismiss}>
                <div className={classes.instance62Dismiss} />
              </div>
            </div>
          </div>
          <div className={classes.instance92Toolbar}>
            <div className={classes.frame91Startconte}>
              <div className={classes.instance70Button}>
                <div className={classes.instance66Add} />
                <div className={classes.frame69Container}>
                  <div className={classes.frame68Textwrappe}>
                    <div className={classes.text67Text}>Configure application</div>
                  </div>
                </div>
              </div>
              <div className={classes.instance75Button}>
                <div className={classes.instance71ArrowClock} />
                <div className={classes.frame74Container}>
                  <div className={classes.frame73Textwrappe}>
                    <div className={classes.text72Text}>Refresh</div>
                  </div>
                </div>
              </div>
              <div className={classes.instance80Button}>
                <div className={classes.instance76ContractUp} />
                <div className={classes.frame79Container}>
                  <div className={classes.frame78Textwrappe}>
                    <div className={classes.text77Text}>Deploy</div>
                  </div>
                </div>
              </div>
              <div className={classes.instance85Button}>
                <div className={classes.instance81Delete} />
                <div className={classes.frame84Container}>
                  <div className={classes.frame83Textwrappe}>
                    <div className={classes.text82Text}>Delete</div>
                  </div>
                </div>
              </div>
              <div className={classes.instance90Button}>
                <div className={classes.instance86Copilot} />
                <div className={classes.frame89Container}>
                  <div className={classes.frame88Textwrappe}>
                    <div className={classes.text87Text}>Summary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.instance96Cursor}>
            <div className={classes.ellipse93Ellipse} />
            <div className={classes.ellipse94Ellipse} />
            <div className={classes.frame95handpointi} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;