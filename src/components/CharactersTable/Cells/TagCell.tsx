import { TableCell } from '@mui/material';
import { Character } from '../../../types';
import { Tags } from '../../Tags';

export const TagCell = ({ tags }: { tags: Character['tags'] }) => {
  const hasTags = tags?.length > 0;

  return (
    <TableCell component="th" scope="row">
      {hasTags ? <Tags tags={tags} /> : ''}
    </TableCell>
  );
};
