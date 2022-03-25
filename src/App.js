import { useState } from "react";
import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, PinterestShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, PinterestIcon } from "react-share";

import sticker1 from './images/slap-ori.png'
import sticker2 from './images/slap-orange.png'
import sticker3 from './images/slap-cartoon.png'
import sticker4 from './images/slap-green.png'
import sticker5 from './images/slap-fast.png'

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
    textAlign: "center",
    "& a": {
      textDecoration: "none",
    },
    "& button:hover": {
      transform: "translateY(-0.2rem)",
      transition: "transform 150ms",
    },
  },
  Header: {
    "&  h1": {
      fontFamily: "Lobster Two",
      cursor: "pointer",
      fontSize: "4rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "1rem",
    },
    "&  ul": {
      listStyle: "none",
      display: "flex",
      justifyContent: "right",
      paddingLeft: "0",
      marginBottom: "2rem",
    },
    "&  li": {
      paddingRight: "2rem",
    },
    "& a": {
      color: theme.palette.text,
    },
    "& a:hover": {
      color: theme.palette.button,
    },
  },
  Name: {
    "& input": {
      padding: "7px",
      border: "none",
    },
  },
  Main: {
    "& canvas": {
      background: theme.palette.secondary,
      padding: "1rem",
      width: "90%",
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
    "& button": {
      border: "1px solid #ccc",
      margin: "5px",
      cursor: "pointer",
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
      textAlign: "start",
      width: "100%",
      margin: "1rem 0",
    },
  },
  Flex: {
    display: "flex",
    alignContent: "center",
    "& a:hover": {
      transform: "translateY(-0.2rem)",
      transition: "transform 150ms",
    },
  },
  DownloadBtn: {
    padding: "0.75rem 2rem",
    background: theme.palette.button,
    borderRadius: "25px",
    color: "white",
    margin: "1rem 0"
  },
  Share: {
    textAlign: "center",
    "& p": {
      paddingTop: "2rem",
    }
  },
  ShareBtn: {
    paddingRight: "5px",
  },
  Readme: {
    textAlign: "left",
    minHeight: "100vh",
  },
}));

const stickers = [sticker1, sticker2, sticker3, sticker4, sticker5].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "a slap sticker"
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
        {/* Main app route */}
        <Route path="/" exact>
          <main>
            <section className={classes.Name}>
              <h2>Step 1: Give it a name</h2>
              <input
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </section>
            <section className={classes.Stickers}>
              <h2>Step 2: Select your sticker...</h2>
              {stickers.map((sticker, index) =>
                <button key={index} onClick={() => setSticker(sticker)}>
                  <img src={sticker.url} alt="a slap sticker" />
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
                  <img src={picture.dataUri} alt="the captured selfie with the sticker" />
                  <div className={classes.Flex}>
                    <h3>{picture.title}</h3>
                    <a href={picture.dataUri} download target="_blank" rel="noreferrer" role="button" className={classes.DownloadBtn}>Download</a>
                  </div>
                </div>
              )}
            </section>
            <section className={classes.Share}>
              <p>Share this app to your friends who want to slap themselves too!</p>
              <PinterestShareButton
                media={"https://dissyulina.github.io/slapsticker-react/static/media/slap-ori.5f0cd602.png"}
                url={"https://dissyulina.github.io/slapsticker-react/"}
                description={"Have you ever said something so dumb, you just wanted to slap yourself? Well now you can! Check out SlapSticker!"}>
                <PinterestIcon size={40} round className={classes.ShareBtn} />
              </PinterestShareButton>
              <FacebookShareButton
                url={"https://dissyulina.github.io/slapsticker-react/"}
                quote={"Check out this cool app!"}
                hashtag={"#slapsticker"}
                description={"Have you ever said something so dumb, you just wanted to slap yourself? Well now you can!"}>
                <FacebookIcon size={40} round className={classes.ShareBtn} />
              </FacebookShareButton>
              <TwitterShareButton
                title={"SlapSticker - Check out this cool app!"}
                url={"https://dissyulina.github.io/slapsticker-react/"}
                hashtags={["slapsticker", "slapyourself"]}
                className={classes.Sharebtn}>
                <TwitterIcon size={40} round className={classes.ShareBtn} />
              </TwitterShareButton>
              <WhatsappShareButton
                title={"SlapSticker - Check out this cool app!"}
                url={"https://dissyulina.github.io/slapsticker-react//"}
                className={classes.Sharebtn}>
                <WhatsappIcon size={40} round className={classes.ShareBtn} />
              </WhatsappShareButton>
            </section>
          </main>
        </Route>
        {/* Readme route */}
        <Route path="/readme">
          <main className={classes.Readme}>
            <h2>SlapSticker Readme</h2>
            <section>
              <h3>What this app should do</h3>
              <p>
                SlapSticker is an app that lets users to slap stickers on their
                face, using their webcam. 
              </p>
              <p>These are the functionalities:</p>
              <ul>
                <li>User can pick a sticker</li>
                <li>User can give the captured image a title</li>
                <li>User can pick out a sticker</li>
                <li>User can place the sticker over the webcam image</li>
                <li>User can capture the webcam image with sticker</li>
                <li>User can download the captured image / photo</li>
                <li>User can share the app to the social media</li>
              </ul>
              <h3>Enjoy the app and have fun!</h3>
            </section>
          </main>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;