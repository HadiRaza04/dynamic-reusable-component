import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

let Post = ({profilePhoto, name, postDate, postText, postImage}) => (
        <div className="post">
            <div className="profileImg">
              <div>
                <img src={profilePhoto} alt="profile"/> 
              </div>
              <div id="name">
                {name} <br />
              </div>
              <div>
                {moment(postDate).fromNow()}
              </div>
            </div>
            <div className="content">
              {postText}

              <img src={postImage} alt="postImage"/>
            </div>
                    
            <div className="icons">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} />&nbsp;
                like
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />&nbsp;
                comment
              </div>
              <div>
                <FontAwesomeIcon icon={faShare} />&nbsp;
                share
              </div>
            </div>
        </div>
);

ReactDOM.render(
<>
  <Post 
    name="Hadi Raza" 
    profilePhoto="https://az505806.vo.msecnd.net/cms/49bcf23b-16f2-47a8-8571-a6a360910814/91f8412f-791a-443a-a607-6316d1eb757c-lg.jpg" 
    postDate="28-Feb-2023" 
    postText="I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this. I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this"
    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1xEJyY6vHzLmvzhSBJ1Rn5vdqAgr6YOopg&usqp=CAU"
  />
  <Post
    name="Raza Shaikh"
    profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DzKX-TJCFXWXYK6xoA_4aFAw-Owx_7ek3w&usqp=CAU" 
    postDate="28-Feb-2023" 
    postText="I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this"
    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1xEJyY6vHzLmvzhSBJ1Rn5vdqAgr6YOopg&usqp=CAU"
  />
  <Post 
    name="Hasan Raza" 
    profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gD7fjkV7WQ2vKmynny79pr2pUTAL1ipF5w&usqp=CAU" 
    postDate="28-Feb-2023" 
    postText="I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this"
    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1xEJyY6vHzLmvzhSBJ1Rn5vdqAgr6YOopg&usqp=CAU"
  />
  <Post 
    name="Khan Zada" 
    profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL9B-sbwREEO70kph8W5NbOOtOXdlR2LZfA&usqp=CAU" 
    postDate="28-Feb-2023" 
    postText="I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this"
    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1xEJyY6vHzLmvzhSBJ1Rn5vdqAgr6YOopg&usqp=CAU"
  />
  <Post 
    name="Salma Khan" 
    profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPh77qauycoWMttvDk2fSDgk5PfD5zqXXIA&usqp=CAU" 
    postDate="28-Feb-2023" 
    postText="I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this"
    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1xEJyY6vHzLmvzhSBJ1Rn5vdqAgr6YOopg&usqp=CAU"
  />
  <Post 
    name="Salman Khan" 
    profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPh77qauycoWMttvDk2fSDgk5PfD5zqXXIA&usqp=CAU" 
    postDate="28-Feb-2023" 
    postText="I am using angular js and nodejs along with ES6. I want to import the moment.js in the angular js code. I did 'npm install moment --save'
    Now I am able to see moment.js file in moment folder which is inside node modules.
    and in my app.js file I have wriiten like this"
    postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1xEJyY6vHzLmvzhSBJ1Rn5vdqAgr6YOopg&usqp=CAU"
  />
</>, document.getElementById("root"));