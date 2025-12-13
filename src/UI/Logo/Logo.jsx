import './Logo.scss';
export default ({ invert }) => {
    return (
        <img src="./Logo.svg" alt="" style={invert ? { filter: 'invert(1)' } : {}}/>
    )
}