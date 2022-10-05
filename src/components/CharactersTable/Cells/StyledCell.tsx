import { TableCell, TableCellProps } from '@mui/material';
import type { ReactNode } from 'react';

export const StyledCell = ({
  children,
  component,
  scope,
  sx,
}: {
  children: ReactNode;
  component?: TableCellProps['component'];
  scope?: TableCellProps['scope'];
  sx?: TableCellProps['sx'];
}) => <TableCell sx={{ fontWeight: 700, fontSize: '20px', ...sx }} component={component} scope={scope}>{children}</TableCell>;
