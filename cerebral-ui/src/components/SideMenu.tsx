import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import {
  Hamburger,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
} from "@fluentui/react-nav-preview";

import {
  Tooltip,
} from "@fluentui/react-components";
import {
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  bundleIcon,
  Home20Filled,
  Home20Regular
} from "@fluentui/react-icons";

const Home = bundleIcon(Home20Filled, Home20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);

export const SideMenu: React.FC<NavDrawerProps> = () => {
  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger />
      </Tooltip>
    );
  };

  return (
    <>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue="1"
        open={true}
        type="inline"
        size="medium"
        style={{ height: "100vh"}}
      >
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>

        <NavDrawerBody>
          <NavItem icon={<Home />} value="1">
            Overview
          </NavItem>
          <NavSectionHeader>Category</NavSectionHeader>
          <NavItem icon={<Announcements />} value="2">
            Announcements
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
    </>
  );
};

export default SideMenu;