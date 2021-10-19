import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    "button": {
      borderColor: "#fff",
      color: "#fff",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#F6D55C",
        color: "#262626"
      }
    }
  }),
);

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="outlined"
      onClick={() => props.select(props.answer.content, props.answer.nextId)}>
      {props.answer.content}
    </Button>
  );
};

export default Answer;