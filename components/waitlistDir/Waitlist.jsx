import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Input from "@mui/material/Input";
import { socials } from "../navBar/Social";
import { Alert } from "@mui/material";

const commonStyle = (ds, jc, pdl, gp, mb) => {
  return {
    display: ds,
    justifyContent: jc,
    alignItems: "center",
    paddingLeft: pdl,
    gap: gp,
    marginBottom: mb,
  };
}

const dateStyle = {
  // width: '10%',
  height: '100px',
	padding: '15px',
	background: 'linear-gradient(180deg, rgba(245, 240, 212, 0.439) 0%, rgba(245, 240,  212, 0.239) 91%, rgba(245, 240,  212, 0.13) 100%)',
	borderRadius: '0.4em',
	display: 'flex',
  gap: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}

const boxStyle = {
  width: "100%",
  height: "100%",
}
const typoStyle = (c, op, fw) => {
  return {
    fontWeight: fw,
    color: c,
    opacity: op,
  }
}
const Waitlist = ({ countDown_days, countDown_hours, countDown_seconds }) => {
  const [inputValue, setInputValue] = React.useState(null);
  const handleInput = event => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    if(!inputValue) return alert("Nothing was submitted.");
    const email = inputValue;
    setInputValue('');
    alert(`Your email: ${email} was added.`);
  };

  return (
    <Stack className='container'>
      <AppBar position="relative" elevation={0} sx={{background: 'transparent',paddingLeft: 4}}>
        <Toolbar sx={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
          <Box>
            <Typography  variant="h6"  noWrap  component="a"  href="/">
              <img src='logo.svg' alt='' width={''} height={''}/>
            </Typography>
          </Box>

          <Box >
            <Typography className='social'>
              {socials.map((social, id) => (
                <Button
                  key={id}
                  // sx={{ my: 2, color: 'purple',  }}
              >
                  {social}
                </Button>
              ))}
            </Typography>

          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{marginTop: 4, ml: 0}}>
        <Grid container item xs={12} sx={{ ...commonStyle('grid', 'start', 4, 1, 0 ), }} >
          <Typography variant="h3" sx={{...typoStyle('', '100%', 600),}}>
            Why is Mars Scared of Jupiter ?
          </Typography>
          <Typography variant="body1" sx={{...typoStyle('', '100%', 600), lineHeight: '2em'}}>Because Jupiter <u>Sat-urn</u> Uranus</Typography>
        </Grid>

        <Box sx={{...commonStyle('flex', 'start', 4, 2, 2), marginTop: 4}}>
          <Box variant='' sx={{...dateStyle}} className='dateStyle'>
            <Typography variant="h4" sx={{ ...typoStyle('', '70%'), fontSize: '3em'}}>
              {countDown_days}
            </Typography>
            <Typography sx={{ ...typoStyle('#ad52cd', '100%', 600), fontSize: '0.8em'}}>Days</Typography>
          </Box>
          <Box variant='' sx={{...dateStyle}} className='dateStyle'>
            <Typography variant="h4" sx={{ ...typoStyle('', '70%'),  fontSize: '3em'}}>
              {countDown_hours}
            </Typography>
            <Typography sx={{...typoStyle('#ad52cd', '100%', 600), fontSize: '0.8em'}}>Hours</Typography>
          </Box>
          <Box variant='' sx={{...dateStyle}} className='dateStyle'>
            <Typography variant="h4" sx={{ ...typoStyle('', '70%'), fontSize: '3em'}}>
              {countDown_seconds}
            </Typography>
            <Typography sx={{...typoStyle('#ad52cd', '100%', 600), fontSize: '0.8em'}}>Minutes</Typography>
          </Box>
        </Box>
        <Box sx={{ ...commonStyle('flex','start', 4, 0, 2),}}>
          <Typography variant="body2" sx={{ ...typoStyle('', '80%', 600), }}>
            We're set to launch in a couple of days. Join the early access list to get exclusive perks.
          </Typography>
        </Box>
          <Box sx={{...commonStyle('flex', 'left', 4, 1, 0),alignItems: 'normal', flexDirection: 'column'}}>
            <Box sx={{width: '100%', ...commonStyle('flex', 'start', 0, 2, 0),}}>
              <Input type="text" placeholder="Email address" value={inputValue} className="input" onChange={handleInput} />
              <button variant="outlined" className="subscribe-button" onClick={handleClick}>Join</button>
            </Box>
            <Typography variant="caption">I understand I can unsubscribe anytime. <span style={{...typoStyle('#ef36d7','100%', 600),}}><a href="">Privacy Policy</a></span></Typography>
          </Box>
        {/* </Box> */}
      </Container>
    </Stack>
  );
}

Waitlist.defaultProps = {
  countDown_days: 50,
  countDown_hours: 59,
  countDown_seconds: 59
};

export default Waitlist;


// #ad52cd
// ff7f17