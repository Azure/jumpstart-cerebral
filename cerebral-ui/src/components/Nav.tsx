import * as React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

const navigationStyles = {
  root: {
    width: 50,
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const links = [
  {
    links: [
      {
        name: 'Calls',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'Phone',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Contacts',
        key: 'key2',
        url: '/',
        iconProps: {
          iconName: 'AddFriend',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Chats',
        key: 'key3',
        url: '/',
        iconProps: {
          iconName: 'OfficeChat',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Notification',
        key:'key4',
        url: '/',
        iconProps: {
          iconName: 'Ringer',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Stats',
        key: 'key5',
        url: '/',
        iconProps: {
          iconName: 'AddOnlineMeeting',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];




const Navigation = () => {
  initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey='key1'
      styles={navigationStyles}
    />
  );
};

export default Navigation;