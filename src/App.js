import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import LocalPhoneRoundedIcon from '@material-ui/icons/LocalPhoneRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import SportsSoccerSharpIcon from '@material-ui/icons/SportsSoccerSharp';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import SportsEsportsSharpIcon from '@material-ui/icons/SportsEsportsSharp';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar
              src="44149997_1970124433043638_8018053065108094976_n.jpg"
              className={classes.large}
            />

            <Typography variant="h4" component="h2" gutterBottom>
              Shaun Lekalakala
            </Typography>
            <Typography variant="h6" component="h4">
              Software Developer
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h2">
              Contact Details
              <Toolbar>
                <LocalPhoneRoundedIcon />
                <Typography>0735398350</Typography>
              </Toolbar>
              <Toolbar>
                <HomeRoundedIcon />
                <Typography>6923 Ivory Park Ext8, Midrand 1682</Typography>
              </Toolbar>
              <Toolbar>
                <EmailRoundedIcon />
                <Typography>shaunklekalakala@ gmail.com</Typography>
              </Toolbar>
              <Toolbar>
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Toolbar>
            </Typography>
            <Divider />
            <Typography variant="h6" component="h2">
              My Skills
              <Toolbar>
                <FiberManualRecordSharpIcon />
                <Typography>Web Developments</Typography>
              </Toolbar>
              <Toolbar>
                <FiberManualRecordSharpIcon />
                <Typography>UI/UX Designing</Typography>
              </Toolbar>
              <Toolbar>
                <FiberManualRecordSharpIcon />
                <Typography>Sales and Marketing</Typography>
              </Toolbar>
              <Toolbar>
                <FiberManualRecordSharpIcon />
                <Typography>Good Communication</Typography>
              </Toolbar>
            </Typography>
            <Divider />
            <Typography variant="h6" component="h2">
              Hobbies
            </Typography>
            <Toolbar>
              <SportsSoccerSharpIcon />
              <MenuBookSharpIcon />
              <SportsEsportsSharpIcon />
              <MusicNoteSharpIcon />
            </Toolbar>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper>
            <Typography variant="h6" component="h2">
              Profile
            </Typography>
            <p>
              I am a recent graduate in Information Technology, in which i have
              a knowledge on Data analysis. I regard myself as person who is
              fascinated by challenges and work hard towards solving the task
              ahead of me, am also like new challenges that evolves with time as
              they turn to teach technics. Me being part of the progrom it will
              help to improve the skills, and learn more on this program.
            </p>
            <Divider />
            <Typography variant="h6" component="h2">
              Work Exprience
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
