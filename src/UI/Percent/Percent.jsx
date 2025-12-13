import './Percent.scss';
export default ({ percent }) => {
    return (
        <div className='Percent'>
            <div className='Percent_top free_img'>
                <img src="./corner.svg" alt="" className='Percent_top_img Percent_top_img_top_left'/>
                <img src="./corner.svg" alt="" className='Percent_top_img Percent_top_img_top_right'/>
            </div>
            <div className='Percent_content'>
                {percent}%
            </div>
            <div className='Percent_bottom free_img'>
                <img src="./corner.svg" alt="" className='Percent_bottom_img Percent_bottom_img_top_left'/>
                <img src="./corner.svg" alt="" className='Percent_bottom_img Percent_bottom_img_top_right'/>
            </div>
        </div>
    )
}