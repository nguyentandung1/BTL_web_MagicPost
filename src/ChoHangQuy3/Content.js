import '../ActivityNews/Content.css'
import RelatedNews from '../ActivityNews/RelatedNews'
import {Grid} from '@material-ui/core'
import MainContent from './MainContent';

function Content({serviceName}) {
    return (
        <div id="content-container">
            <Grid container>
                <Grid item md={2} sm={false} xs={false}></Grid>
                <Grid item md={5} sm={8} xs={12}>
                    <MainContent serviceName={serviceName}  />
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                    <RelatedNews serviceName={serviceName} />
                </Grid>
                <Grid item md={2} sm={false} xs={false}></Grid>
            </Grid>
        </div>
    );
}

export default Content;