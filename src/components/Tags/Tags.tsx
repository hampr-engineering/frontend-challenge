import { Box } from '@mui/material';
import type { CharacterTag } from '../../types';
import { Tag } from './Tag';

export const Tags = ({ tags }: { tags: CharacterTag[] }) => (
  <Box sx={{ display: 'flex' }}>
    {tags.map(tag => (
      <Tag tag={tag} />
    ))}
  </Box>
);
