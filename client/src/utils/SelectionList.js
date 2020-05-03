import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));
export default function SelectionList({ onCLickAction, countryList, ...rest }) {
  const classes = useStyles();
  return (
    <div
      {...rest}
      // style={{
      //   listStyle: 'none',
      //   position: 'absolute',
      //   margin: '0 auto',
      //   top: '6rem',
      //   left: '50%',
      //   transform: 'translateX(-50%)',
      //   zIndex: 50,
      //   textAlign: 'center',
      //   maxHeight: '50%',
      //   overflow: 'scroll',
      // }}
      className={classes.root}
    >
      <List
        subheader={
          <ListSubheader component="div">
            List of available countries :
          </ListSubheader>
        }
      ></List>
      {countryList.map(([countryId, countryName]) => (
        <ListItem
          button
          component="nav"
          key={countryId}
          // style={{
          //   cursor: 'pointer',
          //   background: 'grey',
          //   color: 'white',
          //   border: '1px solid grey',
          //   borderRadius: '.5rem',
          //   minWidth: '5rem',
          //   width: '50%',
          //   margin: '.2rem',
          //   textAlign: 'center',
          //   padding: '.5rem',
          // }}
          onClick={() => {
            onCLickAction(countryId);
          }}
        >
          {countryName}
        </ListItem>
      ))}
    </div>
  );
}
