import './Logo.scss';
export default ({ invert }) => {
    return (
        <img className='Logo' src="./Logo.svg" alt="" style={invert ? { filter: 'invert(1)' } : {}} />
    )
}