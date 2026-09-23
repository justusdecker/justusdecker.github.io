import { MsgBox } from "../common/msgbox";

export default function ErrorPage() {
  return (
    <MsgBox type="err">
      
      <p>Upps! Da ist etwas schiefgelaufen. Die gewünschte Seite ist nicht im System oder es gab ein technisches Problem.</p>
      <button onClick={() => window.location.href = '/'}>
        Hier gehts zurück
      </button>
    </MsgBox>
  );
};