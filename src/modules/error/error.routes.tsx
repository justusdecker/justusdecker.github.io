export default function ErrorPage() {
  return (
    <div className="error-container">
      <h1>Upps! Da ist etwas schiefgelaufen.</h1>
      <p>Die gewünschte Seite ist nicht im System oder es gab ein technisches Problem.</p>
      <button onClick={() => window.location.href = '/'}>
        Hier gehts zurück
      </button>
    </div>
  );
};