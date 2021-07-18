import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import SportsSoccerRoundedIcon from '@material-ui/icons/SportsSoccerRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'black'
  },
  Avatar: {
    marginRight: theme.spacing(3)
  }, 
  typographyStyle: {
    color: 'skyblue'
  },
  CallRoundedIcon: {
    marginLeght: theme.spacing(2)
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          container
          justify="center"
          style={{ height: '100px' }}
          alignItems="center"
        >
          
          <Avatar className={classes.Avatar} />
          <Grid item>
            <Typography variant="h4" className={classes.typographyStyle}>
              Shaun Lekalakala
            </Typography>
            <Typography className={classes.typographyStyle} variant="h6">
              software developer
            </Typography>
            
          </Grid>
         
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} container spacing={3}>
          <Grid item xs={6}>
            
            <Typography
              variant="body1"
              className={classes.typographyStyle}
              gutterButton=""
            >
              CONTACT
            </Typography>
            <Typography variant="subtitle2">
              <CallRoundedIcon fontSize="small" />
              073-539-8350
            </Typography>
            <Typography variant="subtitle2">
              <EmailRoundedIcon fontSize="small" />
              shaunklekalakala@gmail.com
            </Typography>
            <Typography variant="subtitle2">
              <RoomRoundedIcon fontSize="small" />
              6923 IVORY PARK EXT8
            </Typography>
            <Grid item>
              <Divider />
            </Grid>
            <Typography
              variant="body1"
              className={classes.typographyStyle}
              gutterButton=""
            >
              SKILLS
            </Typography>
            <Typography variant="subtitle2">
              <FiberManualRecordRoundedIcon fontSize="small" />
              JAVA
            </Typography>
            <Typography variant="subtitle2">
              <FiberManualRecordRoundedIcon fontSize="small" />
              PHP
            </Typography>
            <Typography variant="body2">
              <FiberManualRecordRoundedIcon fontSize="small" />
              HTML/CSS
            </Typography>
            <Typography variant="body2">
              <FiberManualRecordRoundedIcon fontSize="small" />
              ANGULAR
            </Typography>
            <Typography variant="body2">
              <FiberManualRecordRoundedIcon fontSize="small" />
              V.NET
            </Typography>
            <Grid item>
              <Divider />
            </Grid>
            <Typography
              variant="body1"
              className={classes.typographyStyle}
              gutterButton=""
            >
              HOBBIES
            </Typography>
            <div>
              <SportsSoccerRoundedIcon />
              <LibraryBooksRoundedIcon />
              <SportsEsportsRoundedIcon />
            </div>
          </Grid>
        
          <Grid item xs={6}>
            <div>
              <Typography
                variant="body1"
                className={classes.typographyStyle}
                gutterButton=""
              >
                Profile
              </Typography>
              <Typography variant="subtitle2">
                Am a recent graduate in Information Technology, in which i have
                a knowledge on Data analysis. I regard myself as person who is
                fascinated by challenges and work hard towards solving the task
                ahead of me, am also like new challenges that evolves with time
                as they turn to teach technics. Me being part of the progrom it
                will help to improve the skills, and learn more on this program.
              </Typography>
            </div>
            <Grid item>
              <Divider />
            </Grid>
            <Typography
              variant="body1"
              className={classes.typographyStyle}
              gutterButton=""
            >
              Work Experience
            </Typography>
            <Typography variant="body1">Dis-Chem Warehouse</Typography>
            <Typography variant="subtitle2">2017-2020:
           
              I worked as a dispatch-clerk on the dipatch department, we were
              loading the the stock on the trucks and preparing the trip
              manifesto.
            </Typography>
            <Typography variant="body1">Proventage Media Group(PMG)</Typography>
            <Typography variant="subtitle2">
2015 - 2015:
Was doing outdoor promotions for diferent companies. for a certain period, then
we will move to do another promotion for another client.
            </Typography>
            <Grid item>
              <Divider />
            </Grid>
            <Typography
              variant="body1"
              className={classes.typographyStyle}
              gutterButton=""
            >
              Education
            </Typography>
            <Typography 
            variant="body1">
              UNISA:DIPLOMA IN INFORMATION TECHNOLOGY</Typography>
            <Typography variant="subtitle2">
2015 - 2015

            </Typography>
            <Typography 
            variant="body1">
              DAMELIN:
ONLINE-SHORT COURSE CERTIFICATE IN DATA ANALYSIS</Typography>
            <Typography variant="subtitle2">
2019 - 2019

            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
