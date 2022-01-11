import React from 'react';

import { makeStyles } from 'utils/makeStyles';

interface ConverstionDetailsProps {}

const useStyles = makeStyles()(() => ({
  conversationDetails: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
}));

const ConverstionDetails: React.FC<ConverstionDetailsProps> = (props) => {
  const { classes } = useStyles();

  return <div className={classes.conversationDetails}>hello</div>;
};
export default ConverstionDetails;
