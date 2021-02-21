import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    /* height: 90vh;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center; */
    z-index: 2;
`;

export const VideoOverlay = styled.div`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: black;
    z-index: 1;
    opacity: 0.5;
    overflow-y: hidden;
`;

export const Video = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: hidden;
`;