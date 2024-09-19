import { ICommandBarItemProps, CommandBar } from "@fluentui/react";

const Toolbar = () => {

  const _items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      text: 'Configure application',
      cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
      iconProps: { iconName: 'Add' },
    },
    {
      key: 'upload',
      text: 'Refresh',
      iconProps: { iconName: 'Refresh' },
      href: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
      key: 'share',
      text: 'Deploy',
      iconProps: { iconName: 'Deploy' },
      onClick: () => console.log('Share'),
    },
    {
      key: 'download',
      text: 'Delete',
      iconProps: { iconName: 'Delete' },
      onClick: () => console.log('Download'),
    },
    {
      key: 'copilot',
      text: 'Summary',
      iconProps: { iconName: 'Robot' },
      onClick: () => console.log('Download'),
    },
  ];
  
  return (
      <CommandBar
        ariaLabel="Use left and right arrow keys to navigate between commands"
        items={_items}
      />
  );
};

export default Toolbar;