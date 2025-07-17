import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import { SubmitButton } from "#/components/shared/buttons/submit-button";
import { ModalButton } from "#/components/shared/buttons/modal-button";

interface FeedbackFormProps {
  onClose: () => void;
}

export function FeedbackForm({ onClose }: FeedbackFormProps) {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement feedback submission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <textarea
        className="w-full rounded-md border border-tertiary bg-secondary p-2"
        rows={4}
        placeholder={t(I18nKey.FEEDBACK$SUBMITTING_MESSAGE)}
      />
      <div className="flex justify-end space-x-2">
        <ModalButton
          text={t(I18nKey.BUTTON$CANCEL)}
          onClick={onClose}
          variant="default"
          className="px-4 py-2 bg-secondary hover:bg-secondary-hover"
        />
        <SubmitButton onClick={onClose} />
      </div>
    </form>
  );
}
