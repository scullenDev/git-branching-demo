import React from 'react';

const Message = (props) => {
  // console.log(props);

  const closeMessage = () => {
    alert('Add logic to close!');
  };

  return (
    <div className={`message ${props.theme ? 'message--' + props.theme : ''}`}>
      <div>
        {props.icon && <i className={`message__icon ${props.icon}`} />}
        {props.children}
      </div>
      {props.closeable && (
        <i
          className="message__close-btn fas fa-times-circle"
          onClick={closeMessage}
          onKeyDown={closeMessage}
        />
      )}
    </div>
  );
};

export default Message;
