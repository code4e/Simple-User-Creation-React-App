import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ title, content, updateModal }) => {
  const closeModal = () => updateModal('', '', false);
  return (
    <div className={classes.backdrop} onClick={closeModal}>
      <Card className={classes.modal}>
        <header>
          <h2 className={classes.header}>
            {title}
          </h2>
        </header>
        <div className={classes.content}>
          <p>
            {content}
          </p>
        </div>
        <footer className={classes.actions}>
          <Button btnClasses={""} btnType={""} btnClickHandler={closeModal}>
            Close
          </Button>
        </footer>
      </Card>
    </div>

  )
}

export default ErrorModal;