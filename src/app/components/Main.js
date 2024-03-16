export default () => {
    return(
        <main>
  <div className="posts">
    <div className="newpost">
      <div className="p">
        <textarea
          name="post"
          id=""
          cols={30}
          placeholder="Create New Post..."
          rows={10}
          defaultValue={""}
        />
      </div>
      <div className="toolbar">
        <ul>
          <li>
            <ion-icon name="images-outline" />
          </li>
          <li>
            <ion-icon name="videocam-outline" />
          </li>
          <li>
            <ion-icon name="podium-outline" />
          </li>
          <li>
            <ion-icon name="eye-outline" />
            <ion-icon name="eye-off-outline hidden" />
          </li>
        </ul>
      </div>
    </div>
    <div className="menubar">
      <ul>
        <li>Latest</li>
        <li>Top</li>
        <li>Popular</li>
      </ul>
    </div>
    <div className="newposts">
      <div className="post" id={1}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="name">
            <span className="tomato">@</span>sh20raj
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          <img src="../assets/sh.jpeg" alt="" />
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
        <div className="commentviewer">
          <div className="comment">
            <span className="author">
              <img src="../assets/logo.png" alt="" />
              <span>
                <span className="tomato">@</span>sh20raj
              </span>
            </span>
            <span className="content">
              Hii, It's Just Wonderful Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Corrupti, ipsam. Quia incidunt nam, natus illo
              possimus eligendi hic animi unde asperiores repellendus eaque
              nostrum ea quidem tempora. Ea, maiores totam!
            </span>
          </div>
        </div>
      </div>
      <div className="post" id={2}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>What's your Gender!</p>
          <div className="poll">
            <div className="container">
              <h1 className="poll-question">Do you like programming?</h1>
              <form id="poll-form" className="poll-form">
                <label>
                  <input type="radio" name="vote" defaultValue="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="vote" defaultValue="no" /> No
                </label>
                <button type="submit" className="vote-button">
                  Vote
                </button>
              </form>
              <div id="results" className="results">
                <h2 className="results-title">Results</h2>
                <div className="results-count">
                  <p>
                    Yes:
                    <span id="yes-count" className="count">
                      0
                    </span>
                  </p>
                  <p>
                    No:
                    <span id="no-count" className="count">
                      0
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={3}>
        <div className="author">
          <div className="logo">
            <img src="../assets/apple-icon.webp" alt="" />
          </div>
          <div className="name">
            <span className="tomato">@</span>sh20raj
          </div>
        </div>
        <div className="post-content">
          <p></p>
          <img src="../assets/apple-icon.webp" alt="" />
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={4}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={5}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={6}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={1}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="name">
            <span className="tomato">@</span>sh20raj
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          <img src="../assets/sh.jpeg" alt="" />
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={2}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>What's your Gender!</p>
          <div className="poll">
            <div className="container">
              <h1 className="poll-question">Do you like programming?</h1>
              <form id="poll-form" className="poll-form">
                <label>
                  <input type="radio" name="vote" defaultValue="yes" /> Yes
                </label>
                <label>
                  <input type="radio" name="vote" defaultValue="no" /> No
                </label>
                <button type="submit" className="vote-button">
                  Vote
                </button>
              </form>
              <div id="results" className="results">
                <h2 className="results-title">Results</h2>
                <div className="results-count">
                  <p>
                    Yes:
                    <span id="yes-count" className="count">
                      0
                    </span>
                  </p>
                  <p>
                    No:
                    <span id="no-count" className="count">
                      0
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={3}>
        <div className="author">
          <div className="logo">
            <img src="../assets/apple-icon.webp" alt="" />
          </div>
          <div className="name">
            <span className="tomato">@</span>sh20raj
          </div>
        </div>
        <div className="post-content">
          <p></p>
          <img src="../assets/apple-icon.webp" alt="" />
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={4}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={5}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
      <div className="post" id={6}>
        <div className="author">
          <div className="logo">
            <img src="../assets/sh.jpeg" alt="" />
          </div>
          <div className="details">
            <span className="tomato">@</span>sh20raj
            <div className="date">20 minutes ago</div>
          </div>
        </div>
        <div className="post-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque
            in optio, enim vitae cum at debitis alias obcaecati fuga, expedita
            sapiente. Recusandae eius odit a autem quibusdam iure ipsa.
          </p>
          {/* <img src="../assets/sh.jpeg" alt=""> */}
        </div>
        <div className="post-footer">
          <div className="like">
            <ion-icon name="heart-outline" />
          </div>
          <div className="dislike">
            <ion-icon name="heart-dislike-outline" />
          </div>
          <div className="comment">
            <ion-icon name="chatbubble-ellipses-outline" />
          </div>
          <div className="share">
            <ion-icon name="share-outline" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sidebar">
    <div className="menubar">
      <ul>
        <li id="reelbtn" onclick="showSection('section1')">Reels</li>
        <li id="articlebtn" onclick="showSection('section2')">Articles</li>
        <li id="imagebtn" onclick="showSection('section3')">Images</li>
      </ul>
    </div>
    <div className="playground">
      <div className="layout section1">Reels</div>
      <div className="layout section2">Articles</div>
      <div className="layout section3">Images</div>
    </div>
  </div>
</main>


    );
}