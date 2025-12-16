export default ({
    activeIndex,
    rect,
    expanded,
    closing,
    prev,
    nextImage,
    close,
}) => {
    if (activeIndex === null || !rect) return null;

    const active = `./gallery/woman${activeIndex + 1}.webp`;

    const style = expanded
        ? {
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '80vh',
            transform: 'translate(-50%, -50%)',
        }
        : {
            top: `${rect.top}px`,
            left: `${rect.left}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            transform: 'translate(0, 0)',
        };

    return (
        <div className={`Gallery_modal ${closing ? 'closing' : ''}`}>
            <div className="Gallery_modal_left">
                <img src="./btnArrow.svg" alt="prev" onClick={prev} />
            </div>

            <img
                src={active}
                className={`Gallery_modal_img ${expanded ? 'active' : ''}`}
                style={style}
            />

            <div className="Gallery_modal_right">
                <div className="Gallery_modal_right_exit">
                    <img src="./close.svg" alt="" onClick={close} />
                </div>
                <img src="./btnArrow.svg" alt="next" onClick={nextImage} />
                <div className="Gallery_modal_right_inner" />
            </div>
        </div>
    );
};