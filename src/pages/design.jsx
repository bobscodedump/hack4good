import React from "react";

import { Link } from "react-router-dom";
import DesignCard from "../components/DesignCard";
import video from "../../public/assets/images/video.png";
import photoshop from "../../public/assets/images/photoshop.png";
import snake from "../../public/assets/images/snake.png";
import webdev from "../../public/assets/images/webDev.png";
import game from "../../public/assets/images/gaming.png";
import cplus from "../../public/assets/images/cplus.png";

function Design() {
  const link = ["https://www.udemy.com/course/adobe-premiere-pro-video-editing/", 
  "https://www.udemy.com/course/adobe-photoshop-cc-essentials-training-course/",
  "https://www.codecademy.com/learn/learn-python",
  "https://www.codecademy.com/learn/deploy-a-website",
  "https://www.codecademy.com/learn/paths/create-video-games-with-phaser",
"https://www.codecademy.com/catalog/language/c-plus-plus"]
  const title = ["ADOBE PREMIERE PRO VIDEO EDITING", "PYTHON FOR BEGINNERS", "CHATBOT WITH PYTHON" , "BUILD A WEBSITE", "CREATE A VIDEO GAME", "LEARN C++"]
  const description = ["Learn Beginner-Advanced Adobe Premiere Pro Video Editing, Audio Editing, Color Grading, Motion Graphics, Green Screen+.",
  "Learn the basics of the world's fastest growing and most popular programming language used by software engineers.",
  "Go from being a complete python beginner to being able to create chatbots with deep learning. Have fun making your own chatbot !", 
"Learn how to publish a personal website to the public Internet. Deploying—or pushing new code to a server—is an integral part of a developer’s daily workflow. ",
"It's east to get lost in the flow of a good game. But behind every power-up and boss battle is simple code that brings the game to life",
"Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more."]
 
  return (
<div className="bg-pink-100">
<div className="p-4 flex flex-row flex-wrap flex-col-3 gap-20 w-[1400px] mx-auto mt-20">
<DesignCard image={video} link={link[0]} title={title[0]} description={description[0]}/>
<DesignCard image={photoshop} link={link[1]} title={title[1]} description={description[1]}/>
<DesignCard image={snake} link={link[2]} title={title[2]} description={description[2]}/>
<DesignCard image={webdev} link={link[3]} title={title[3]} description={description[3]}/>
<DesignCard image={game} link={link[4]} title={title[4]} description={description[4]}/>
<DesignCard image={cplus} link={link[5]} title={title[5]} description={description[5]}/>
</div>
</div>
   
  );
}

export default Design;