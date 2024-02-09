import star from '../../assets/star.png';
import obj from '../../utils/ReviewColorUtil.js'

const ArtworkReviewSummary = ({ reviews }) => {

    const summary = {
        total: 0
    }

    function calReviewSummary() {
        reviews.map((review) => {
            summary.total += review.review_points;
        })
    }

    calReviewSummary();

    return (
        <div className={`border d-flex gap-2 flex-column p-2`} style={{ backgroundColor: '#ffffff' }}>
            <div className={`d-flex align-items-center justify-content-start p-0 gap-2`}>
                <text style={{ padding: 0, margin: 0, fontSize: '30px', fontWeight: 500 }}>{reviews.length === 0 ? 0 : summary.total / reviews.length}</text>
                <text>Average</text>
            </div>
            <div className={`d-flex align-items-center justify-content-start p-0 gap-2`}>
                <text style={{ padding: 0, margin: 0, fontSize: '30px', fontWeight: 500 }}>{summary.total}</text>
                <text>Rating Points</text>
            </div>
            <div className={`d-flex justify-content-center px-2 align-items-center`}
                style={{
                    //  borderTopRightRadius: '40px',
                    textAlign: 'center',
                    backgroundColor: obj.func(summary.total, reviews.length).color,
                    color: 'white',
                    width: '200px',
                    height: '30px',
                    borderRadius: "0px"
                }}>
                <text style={{ fontWeight: 500, fontSize: '15px' }}>{obj.func(summary.total, reviews.length).txt}</text>
            </div>
        </div>
    );
}

export default ArtworkReviewSummary;