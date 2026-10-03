import { MsgBox } from "../common/msgbox";
import { BackgroundShader } from "../components/BackgroundShader";

export default function ErrorPage() {
  return (
    <>
      <BackgroundShader></BackgroundShader>
      <MsgBox type="err">
      
      <p>Upps! Da ist etwas schiefgelaufen. Die gewünschte Seite ist nicht im System oder es gab ein technisches Problem.</p>
      <button onClick={() => window.location.href = '/'}>
        Hier gehts zurück
      </button>
    </MsgBox>
    </>
  );
};