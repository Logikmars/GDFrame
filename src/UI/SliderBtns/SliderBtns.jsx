import './SliderBtns.scss';

export default ({ onPrev, onNext }) => {
    return (
        <div className='SliderBtns fcc'>
            <div
                className='SliderBtns_btn SliderBtns_btn_left'
                onClick={onPrev}
            >
                <img src="./btnArrow.svg" alt="" />
            </div>

            <div
                className='SliderBtns_btn SliderBtns_btn_right'
                onClick={onNext}
            >
                <img src="./btnArrow.svg" alt="" />
            </div>
        </div>
    );
};
