import clsx from "clsx";
import { createPortal } from "react-dom";

/**
 *
 * @param {{
 * className: string,
 * width: 'md' | 'full',
 * isOpen: boolean
 * onClose: Function
 * }} props
 * @returns
 */
export function UiModal({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}) {
  const handleClick = (evt) => {
    const inModal = evt.target.closest("[data-id=modal]"); // выбор data-id=modal среди родителей таргета
    if (inModal) return;
    onClose();
  };
  if (!isOpen) {
    return null;
  }
  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur-sm pt-10 pb-9 overflow-y-auto",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative",
          "flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <button
          onClick={onClose}
          className="w-8 h-8 flex rounded items-center justify-center 
        absolute left-[calc(100%+12px)]
        bg-white/10 hover:bg-white/40 transition-colors"
        >
          <CloseWindowIcon className="w-4 h-4 text-white" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "px-6 pt-6 pb-4 text-2xl")}>{children}</div>
  );
};
UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={clsx(className, "px-6 ")}>{children}</div>;
};
UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};

function CloseWindowIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 384 512"
    >
      <path
        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
        fill="currentColor"
      />
    </svg>
  );
}
