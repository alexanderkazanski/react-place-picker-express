export default function Places({ title, places, fallbackText, onSelectPlace, isLoading, isLoadingText }) {
  console.log(places)
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{isLoadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => {
            const {id, image, title} = place
            const url = `http://localhost:3000/${image.src}`

            return <li key={id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img src={url} alt={image.alt} />
                <h3>{title}</h3>
              </button>
            </li>
          })}
        </ul>
      )}
    </section>
  );
}
