import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../view";

export function JournalPage() {
  return (
    <>
      <JournalLayout>
        {/* NothingSelected */}
        <NothingSelectedView />
        {/* NoteView */}
      </JournalLayout>
    </>
  );
}
