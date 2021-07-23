export default function Contents({props}) {
    
   

    return (
            <div className="content">
                <div>
                  
                    {
                        props.img != 'blank'
                        ?<div className="imgbox"><img src={props.img} alt="" /></div>
                        :null
                    }
                    <div className="subtit">
                        <a href="https://velog.io">
                            <h4>{props.title}</h4>
                            <div className="text">
                                <p>{props.subtit}</p>
                            </div>
                        </a>
                        <div className="subinfo">
                            <span>{props.datetime}</span>
                            <span class="separator">·</span>
                            <span>{props.comment}</span>
                        </div>
                    </div>
                    {
                        props.img == 'blank'
                        ?<div className="blank"></div>
                        :null
                    }
                    <div className="subwho"> 
                        <a href="">
                            <img src={props.icon} alt="" />
                            <span>
                                by  
                                <b> {props.who}</b>
                            </span>
                        </a>
                        <div className="heart">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                            {props.like}
                        </div>
                    </div>
                </div>
            </div>
    );
}

/*
export default function Contents(props) {
    return (
            <div className="content">
                <div>
                    <div className="imgbox">
                        <img src="https://media.vlpt.us/images/gomjellie/post/d464dfc0-53da-4988-9548-870d05eb7912/google internship.png?w=640" alt="" />
                    </div>
                    <div className="subtit">
                        <a href="https://velog.io">
                            <h4>구글 코리아 면접후기</h4>
                            <div className="text">
                                <p>googlyness: 구글 스러움</p>
                            </div>
                        </a>
                        <div className="subinfo">
                            <span>2021년 6월 29일</span>
                            <span class="separator">·</span>
                            <span>18개의 댓글</span>
                        </div>
                    </div>
                    <div className="subwho"> 
                        <a href="">
                            <img src="https://media.vlpt.us/images/gomjellie/profile/b1c6a41b-4d7b-44df-bdd3-4903354be563/구경.png?w=120" alt="" />
                            <span>
                                by  
                                <b> gomjellie</b>
                            </span>
                        </a>
                        <div className="heart">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                            23
                        </div>
                    </div>
                </div>
            </div>
    );
}
*/