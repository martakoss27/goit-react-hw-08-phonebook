import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <Box
      component="section"
      sx={{ p: 2 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      my={4}
      color="white"
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
