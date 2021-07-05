import './Content.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Divider, Link} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';
import SearchIcon from '@material-ui/icons/Search';

function NewsContent({header, body, time, news, overlay}) {
    return (
        <div>
            <div class="news-container">
            <div class="news-image">
                <img class="image" src={news} alt="news" />
                <Link class="overlay" href='/activitynews' style={{ textDecoration: 'none', color: "black"}}>
                    <div>
                        <span><LinkIcon style={{color: "white"}} /></span>  <span><SearchIcon style={{color: "white"}} /></span>
                    </div>
                    <div>{overlay}</div>
                </Link>
            </div>
            <div class="news-content-container">
                <Link class="news-content-header" style={{ textDecoration: 'none'}}>{header}</Link>
                <div class="news-content-body">{body}</div>
                <div class="news-content-time"><AccessTimeIcon /> {time}</div>
            </div>
        </div>
        <Divider style={{marginTop: "1vw", marginBottom: "1vw"}} />
        </div>
    );
}

export default NewsContent;