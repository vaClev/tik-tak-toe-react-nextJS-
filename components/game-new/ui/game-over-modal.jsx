import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";

export function GameOverModal({ winnerName, players, onClose }) {
  return (
    <UiModal
      width="md"
      isOpen={winnerName}
      onClose={() => {
        console.log("close");
        onClose({ type: "reset", now: Date.now(), defaultTimer: 60000 });
      }}
    >
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="mt-4 bg-white justify-between grid grid-cols-2 gap-2">
          {players}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
