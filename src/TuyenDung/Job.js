import '../ActivityNews/Content.css'
import {Link} from '@material-ui/core'

function Job({job, jd, require, applyAt}) {
    var jdList = jd.split("-");
    var requireList = require.split("-")
    return (
        <div class="job">
            <div class="job-container">{job}</div>
            <div class="jd-container">
                -Công việc:
                <div class="jd-list">
                    {
                        jdList.map(i => {
                            return <div class="jd">{i}</div>
                        })
                    }
                </div>
            </div>    
            <div class="require-container">
                -Yêu cầu:
                <div class="require-list">
                    {
                        requireList.map(i => {
                            return <div class="require">{i}</div>
                        })
                    }
                </div>
            </div>
            <div class="applyAt-container">
                -Ứng tuyển tại: <Link href={applyAt}>{applyAt}</Link>
            </div>
        </div>
    );
}

export default Job;