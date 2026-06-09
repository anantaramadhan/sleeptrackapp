import React from 'react';

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Konfirmasi',
  message = 'Apakah Anda yakin?',
  confirmText = 'Ya, Lanjutkan',
  cancelText = 'Batal',
  icon = '⚠️',
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__icon">{icon}</div>
        <h3 className="modal__title">{title}</h3>
        <p className="modal__desc">{message}</p>
        <div className="modal__actions">
          <button className="modal__btn modal__btn--cancel" onClick={onClose}>
            {cancelText}
          </button>
          <button className="modal__btn modal__btn--confirm" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
