import './Type.scss';
export default ({ type, text }) => {
    return (
        <div className='Type fcc'>
            <div className='Type_block fcc'>
                <div className='Type_block_decor_top free_img'>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Type_block_decor_top_arrow Type_block_decor_top_arrow_left'>
                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Type_block_decor_top_arrow    Type_block_decor_top_arrow_right'>
                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                    </svg>
                </div>
                <div className='Type_block_item'>

                </div>
                <div className='Type_block_decor_bottom free_img'>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Type_block_decor_bottom_arrow Type_block_decor_bottom_arrow_left'>
                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                    </svg>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='Type_block_decor_bottom_arrow Type_block_decor_bottom_arrow_right'>
                        <path d="M8.66699 9.83337L8.66699 0.5L0.000325225 0.5" stroke="#0D0D0D"/>
                    </svg>
                </div>
            </div>
            {type}
            <div className='Type_text'> / &nbsp;{text}</div>
        </div>
    )
}