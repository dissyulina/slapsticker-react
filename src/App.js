import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'
import logo from './slap.png'

import { Link, Switch, Route, Redirect } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  '@import': "url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans&display=swap')",

  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
    fontFamily: "Open Sans",
    lineHeight: 1.5,
  },

  App: {
    "&  h2": {
      fontFamily: "Lobster Two",
      fontWeight: "700",
      fontSize: "2rem",
      letterSpacing: "1px",
    },
    padding: "20px",
    background: theme.palette.primary,
    maxWidth: "800px",
    minHeight: "600px",
    margin: "auto",
    "& a": {
      color: theme.palette.text,
    },
  },
  Header: {
    "&  h1": {
      fontFamily: "Lobster Two",
      cursor: "pointer",
      fontSize: "4rem",
      fontWeight: "700",
      textAlign: "center",
    },
    "&  ul": {
      listStyle: "none",
      display: "flex",
      paddingLeft: "0",
    },
    "&  li": {
      paddingRight: "2rem",
    },
  },
  Main: {
    "& canvas": {
      background: theme.palette.secondary,
      padding: "1rem",
      width: "100%",
      height: "auto",
    },
    "& video": {
      display: "none",
    },
  },
  Stickers: {
    "& img": {
      height: "4rem",
    },
  },
  Gallery: {
    "& img": {
      height: "16rem",
    },
  },
  Picture: {
    background: "white",
    padding: "0.5rem",
    position: "relative",
    display: "inline-block",
    "& h3": {
      padding: 8,
      textAlign: "center",
      width: "100%",
    },
  },
}));

const stickers = [logo].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});


function App(props) {
  // css classes from JSS hook
  const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div className={classes.App}>
      <header className={classes.Header}>
        <h1>SlapSticker</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/readme">Readme</Link>
            </li>
          </ul>
        </nav>
        <p>
          Have you ever said something so dumb, you just wanted to slap
          yourself? Well now you can!
        </p>
      </header>
      <Switch>
        /** * Main app route */
        <Route path="/" exact>
          <main>
            <section className={classes.Gallery}>
              <h2>Step 1: Give it a name</h2>
              <input
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </section>
            <section className={classes.Stickers}>
              <h2>Step 2: Select your sticker...</h2>
              {stickers.map((sticker) =>
                <button onClick={() => setSticker(sticker)}>
                  <img src={sticker.url} />
                </button>
              )}
            </section>
            <section className={classes.Main}>
              <h2>Step 3: Slap your self!</h2>
              <video ref={handleVideoRef} />
              <canvas
                ref={handleCanvasRef}
                width={2}
                height={2}
                onClick={handleCapture}
              />
            </section>
            <section className={classes.Gallery}>
              <h2>Step 4: Cherish this moment forever</h2>
              {picture && (
                <div className={classes.Picture}>
                  <img src={picture.dataUri} />
                  <h3>{picture.title}</h3>
                </div>
              )}
            </section>
          </main>
        </Route>
        /** * Readme route */
        <Route path="/readme">
          <main>
            <h2>Devtest Readme</h2>
            <p>
              Hello candidate, Welcome to our little dev test. The goal of this
              exercise, is to asses your general skill level, and give us
              something to talk about at our next appointment.
            </p>
            <section>
              <h3>What this app should do</h3>
              <p>
                SlapSticker is an app that lets users to slap stickers on their
                face, using their webcam. Functionality wise the app works, but
                the ui needs some love. We'd like for you to extend this
                prototype to make it look and feel it bit better.
              </p>
              <p>These are the basic requirements:</p>
              <ul>
                <li>User can pick a sticker</li>
                <li>User can give the captured image a title</li>
                <li>User can place the sticker over the webcam image</li>
                <li>User can capture the webcam image with sticker</li>
              </ul>
            </section>
            <section>
              <h3>What we want you to do</h3>
              <p>
                Off course we didn't expect you to build a full fledged app in
                such a short time frame. That's why the basic requirements are
                already implemented.
              </p>
              <p>
                However, we would like for you to show off your strengths as a
                developer by improving the app.
              </p>
              <p>Some ideas (no need to do all):</p>
              <ul>
                <li>Make it look really nice</li>
                <li>Let users pick from multiple (custom) stickers</li>
                <li>Improve the workflow and ux</li>
                <li>Show multiple captured images in a gallery</li>
                <li>Let users download or share the captured pics</li>
                <li>Add super cool effects to webcam feed</li>
                <li>Organize, document and test the code</li>
                <li>Integrate with zoom, teams, meet...</li>
              </ul>
            </section>
            <section>
              <h3> quickstart</h3>
              <ul>
                <li>You can clone this repo to get started </li>
                <li>run `$ npm install` to install deps</li>
                <li>run `$ npm run start` to start dev environment</li>
                <li>push it to github or gitlab to share it with us. </li>
              </ul>
            </section>
            <section>
              <p>
                P.s. We've already added some libraries to make your life easier
                (Create React App, Jss, React Router), but feel free to add
                more.
              </p>
            </section>
          </main>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
