import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material/";

function Left() {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItem: "center" }}>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
            marginTop: "2.5em"
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#ff7200",
              fontWeight: "bolder"
            }}
          >
            Planetopia NFT MarketPlace
          </Typography>
          <Typography variant="h6" sx={{ color: "#58e1eb99" }}>
            ...built just for you.
          </Typography>
          <Typography variant="h5" sx={{ color: "#58e1eb99" }}>
            Turn your music idea to an NFT, sell, transfer, monetize copyright.
          </Typography>
          <button className="app-btn">DApp</button>
        </Box>
      </Box>
    </Grid>
  );
}


function Right() {
  // const [value, setValue] = React.useState(null);

  // React.useEffect((e) => {
  //   const URL = "https://script.google.com/macros/s/AKfycbxfHRu2IwTpBrMhh5AyEzl8tY13W15wo0D74Zem_ciq4zus72T-/exec";
  //   const form = document.forms['google-sheet'];
  //   form.addEventLister('submit', e => {
  //     e.preventDefault()
  //     fetch(URL, {method: 'POST', body: new FormData(form)})
  //       .then(response => alert('Submitted'))
  //       .catch((e) => console.log("Error", e.message));
  //   })
  // }, []);
  // const handleChange = async e => {
  //   e.preventDefault();
  //   console.log("EEE,", e.target.value);
  //   setValue(e.target.value);
  // };

  // async function submit() {
  //   const URL = "https://script.google.com/macros/s/AKfycbxfHRu2IwTpBrMhh5AyEzl8tY13W15wo0D74Zem_ciq4zus72T-/exec";
  //   console.log("EEE,", value);
  //   await fetch(URL, { method: "POST", body: new FormData(value) })
  //     .then(response => {
  //       console.log("Response", response);
  //       alert("Submitted");
  //     })
  //     .catch(e => console.log("Error", e.message));
  // }

  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          marginBottom: "2em",
          // background : 'red'
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            flexDirection: "column",
            marginTop: "2.5em"
          }}
        >
          <form className="form-div">
            <h1 className="header">Join the Waitlist</h1>
            <input type='submit' name="submit" value='Submit' placeholder="Enter email" label="Email" className="input" />
            <button className="app-btn-2">
              {" "}
              Submit
            </button>
            {/* <input type={'submit'} name='submit' value={'Submit'} className="app-btn-2" /> */}
          </form>
        </Box>
      </Box>
    </Grid>
  );
}

export default function WaitlistContent() {
  return (
    <Grid
      sx={{
        marginTop: "2em",
        height: "100vh",
        overflow: "scroll"
      }}
      container
    >
      <Left />
      <Right />
    </Grid>
  );
}
