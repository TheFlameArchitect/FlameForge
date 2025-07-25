import { useMutation } from "@tanstack/react-query";
import { Trans, useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import FlameForgeLogoSVG from "#/assets/branding/flame-forge-logo.svg?react";
import { ModalBackdrop } from "#/components/shared/modals/modal-backdrop";
import { ModalBody } from "#/components/shared/modals/modal-body";
import OpenHands from "#/api/open-hands";
import { BrandButton } from "../settings/brand-button";
import { displayErrorToast } from "#/utils/custom-toast-handlers";

export function SetupPaymentModal() {
  const { t } = useTranslation();
  const { mutate, isPending } = useMutation({
    mutationFn: OpenHands.createBillingSessionResponse,
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: () => {
      displayErrorToast(t(I18nKey.BILLING$ERROR_WHILE_CREATING_SESSION));
    },
  });

  return (
    <ModalBackdrop>
      <ModalBody className="border border-tertiary">
        <FlameForgeLogoSVG className="h-12 w-auto" />
        <div className="flex flex-col gap-2 w-full items-center text-center">
          <h1 className="text-2xl font-bold">
            {t(I18nKey.BILLING$YOUVE_GOT_50)}
          </h1>
          <p>
            <Trans
              i18nKey="BILLING$CLAIM_YOUR_50"
              components={{ b: <strong /> }}
            />
          </p>
        </div>
        <BrandButton
          testId="proceed-to-stripe-button"
          type="submit"
          variant="primary"
          className="w-full"
          isDisabled={isPending}
          onClick={mutate}
        >
          {t(I18nKey.BILLING$PROCEED_TO_STRIPE)}
        </BrandButton>
      </ModalBody>
    </ModalBackdrop>
  );
}
