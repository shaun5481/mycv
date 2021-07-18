import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  Avatar: {
    marginRight: theme.spacing(3)
  },
  typographyStyle: {
    color: "grey",
    h6: {
      fontSize: "4em",
      fontFamily: "Arial"
    }
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} container justify="center" style={{height: '100px'}} alignItems="center">
          <Avatar className={classes.Avatar}/>
          <Grid item>
            <Typography variant="h4"
             className={classes.typographyStyle}
            >
            Shaun Lekalakala
            </Typography>
            <Typography
               variant="h6"
              className={classes.typographyStyle}
            >
               software developer
              </Typography>
            </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider/>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                  </Grid>
                  </Grid>
      </Grid>
    </div>
  );
}