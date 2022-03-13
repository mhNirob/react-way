import cx from 'classnames';
import { Component } from 'react';
 
export default class LikeDislike extends Component {
   state = {
    likeCount: 100,
    disLikeCount: 25,
    likeClicked: 0,
    disLikeClicked: 0,
  }

   clickLike(e){
       this.setState({
       likeCount : this.state.likeCount +1,
       });
   }
    render() {
        return (
            <>
                <div >
                    <button className="like-button" onClick={this.clickLike}>
                    Like | <span className="likes-counter">{this.likeCount}</span>
                    </button>
                   
                </div>
                <div >
                    <button className="dislike-button">
                    Dislike | <span className="dislikes-counter">{this.disLikeCount}</span>
                    </button>
                   
                </div>
                
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }
 
                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
} 
