import React from "react";
import "../../App.css";

import MainNav from "../../components/MainNav";
import Slide from "../../components/Slide";
import Footer from "../../components/Footer";
import Video from "../../components/Video";

import { Header } from "semantic-ui-react";

function Lesson(props) {
    return (
    <div>
        <MainNav />
        <Header as={"h1"}>{props.header}</Header>
        <Header as={"h4"}>{props.description}</Header>
        <Header as={"h3"}>Slides:</Header>
        <Slide src={props.slideSrc} />
        <Header as={"h3"}>Recording:</Header>
        <Video src={props.videoSrc} />
        <Footer />
    </div>
    );
}

export default Lesson
