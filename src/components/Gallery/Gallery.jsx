import './Gallery.scss';

export default () => {
  const items = Array(36).fill(0);

  const columns = [];
  for (let i = 0; i < items.length; i += 6) {
    columns.push(items.slice(i, i + 6));
  }

  return (
    // TODO 
    // Сделать модалку для галереи
    <div className="Gallery container fcc">
      {columns.map((col, colIndex) => (
        <div className="Gallery_col" key={colIndex}>
          {col.map((_, index) => (
            <img
              key={`Gallery_${colIndex}_${index}`}
              src={`./gallery/woman${colIndex * 6 + index + 1}.webp`}
              alt=""
            />
          ))}
        </div>
      ))}
    </div>
  );
};
