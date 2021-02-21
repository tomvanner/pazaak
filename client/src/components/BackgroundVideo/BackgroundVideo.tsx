import React from 'react';
import { Container, Video, VideoOverlay } from './BackgroundVideoStyles';

interface Props {
  videoSrc: string
}

const BackgroundVideo : React.FC<Props> = ({ videoSrc, children }) => {
  return (
    <>
      <VideoOverlay />
      <Video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Container>
        {children}
      </Container>
    </>
  );
  // return (
  //   <div>
  //     <div className={classes.videoOverlay}></div>
  //       <video autoPlay loop muted className={classes.video} >
  //           <source src={videoSrc} type="video/mp4" />
  //           Your browser does not support the video tag.
  //       </video>
  //     <div className={classes.contentContainer} >
  //       {children}
  //     </div>
  //   </div>
  // );
}

export default BackgroundVideo;