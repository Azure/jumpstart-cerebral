import * as React from "react";
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from "@fluentui/react-icons";
import {
  PresenceBadgeStatus,
  Avatar,
  DataGridBody,
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";

type FileCell = {
  label: string;
  icon: JSX.Element;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type LastUpdateCell = {
  label: string;
  icon: JSX.Element;
};

type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

const items: Item[] = [
  {
    file: { label: "FFR1 (1)", icon: <DocumentRegular /> },
    author: { label: "", status: "available" },
    lastUpdated: { label: "", timestamp: 1 },
    lastUpdate: {
      label: "",
      icon: <EditRegular />,
    },
  },
  {
    file: { label: "CSAD", icon: <FolderRegular /> },
    author: { label: "FFR1", status: "busy" },
    lastUpdated: { label: "1.0.0.2", timestamp: 2 },
    lastUpdate: {
      label: "Not yet deployed",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "FFR2 (3)", icon: <DocumentRegular /> },
    author: { label: "", status: "available" },
    lastUpdated: { label: "", timestamp: 1 },
    lastUpdate: {
      label: "",
      icon: <EditRegular />,
    },
  },
  {
    file: { label: "CSAD", icon: <FolderRegular /> },
    author: { label: "FFR2", status: "busy" },
    lastUpdated: { label: "1.0.0.3", timestamp: 2 },
    lastUpdate: {
      label: "Not yet deployed",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "HotMelt", icon: <FolderRegular /> },
    author: { label: "FFR2", status: "busy" },
    lastUpdated: { label: "1.0.2.3", timestamp: 2 },
    lastUpdate: {
      label: "Not yet deployed",
      icon: <OpenRegular />,
    },
  },
  {
    file: { label: "SheetLength", icon: <FolderRegular /> },
    author: { label: "FFR2", status: "busy" },
    lastUpdated: { label: "1.0.0.3", timestamp: 2 },
    lastUpdate: {
      label: "Not yet deployed",
      icon: <OpenRegular />,
    },
  },

];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "applicationName",
    compare: (a, b) => {
      return a.file.label.localeCompare(b.file.label);
    },
    renderHeaderCell: () => {
      return "Application name";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.file.icon}>
          {item.file.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "line",
    compare: (a, b) => {
      return a.author.label.localeCompare(b.author.label);
    },
    renderHeaderCell: () => {
      return "Line";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout
          media={
            <Avatar
              aria-label={item.author.label}
              name={item.author.label}
              badge={{ status: item.author.status }}
            />
          }
        >
          {item.author.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "configuredVersionRevision",
    compare: (a, b) => {
      return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
    },
    renderHeaderCell: () => {
      return "Configured version revision";
    },

    renderCell: (item) => {
      return item.lastUpdated.label;
    },
  }),
  createTableColumn<Item>({
    columnId: "deployedVersionRevision",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Deployed version revision";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.lastUpdate.icon}>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "configuredStatus",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Configured Status";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.lastUpdate.icon}>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<Item>({
    columnId: "deployedStatus",
    compare: (a, b) => {
      return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
    },
    renderHeaderCell: () => {
      return "Deployed Status";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout media={item.lastUpdate.icon}>
          {item.lastUpdate.label}
        </TableCellLayout>
      );
    },
  }),  
];

export const SingleSelect = () => {
  const defaultSelectedItems = React.useMemo(() => new Set([1]), []);

  return (
    <DataGrid
      items={items}
      columns={columns}
      selectionMode="single"
      defaultSelectedItems={defaultSelectedItems}
      style={{ minWidth: "550px" }}
    >
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Item>>
        {({ item, rowId }) => (
          <DataGridRow<Item>
            key={rowId}
            selectionCell={{ radioIndicator: { "aria-label": "Select row" } }}
          >
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
