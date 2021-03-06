import * as React from 'react';

import { Box } from '../Primitives/Box';

interface Props {
  shadow: string;
}

export const ShadowToken = ({ shadow }: Props) => {
  return <Box style={{ boxShadow: shadow }} />;
};
