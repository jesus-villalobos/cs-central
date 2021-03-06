import React from "react";

import PREPLesson from "./Lesson";

function PREPLesson4() {
    return (
        <PREPLesson
          header="Control"
          description="This lesson expands on if-statements by adding on elif and else. After the examples of the if-elif-else 
          control block we will seek help from environment diagrams. "
          slideSrc={`https://docs.google.com/presentation/d/e/2PACX-1vQvchYex4y1esn7nbRjOPzfH2NdtvoPEvNqjEr74cDGj5ajb5lomUR4SML-JYVc4E4mMt__w99bsNGR/embed?start=false&loop=false&delayms=3000`}
          prevLesson={null}
          nextLesson=""
          videoSrc={`https://www.youtube.com/embed/ymTeLrLzsIM`}
          lessonDownload="./prepDownloads/prep_lesson4.zip"
          slideLink={`https://docs.google.com/presentation/d/1t6F-lPGgsKP5yCIXonO_3z3uwd0-dN_iwfoDMZPyy9Y/edit?usp=sharing`}
        />
    )
}

export default PREPLesson4;
