import './Title.scss';
export default ({ title, small }) => {
    return (
        <div className={`Title ${small && 'Title_small'}`}>
            {title}
        </div>
    )
}