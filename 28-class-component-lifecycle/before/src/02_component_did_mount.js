import React from 'react';

export default class DatePicker extends React.Component {
  componentDidMount() {
    $(this.el).flatpickr();    
  }

  render() {
    return (
      <div>
        <input type='datetime' ref={(el) => { this.el = el; }} />
      </div>
    );
  }
}


