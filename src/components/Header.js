import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div class='container header'>
        <button type='button float-left header__button' class='btn btn-primary'>+</button>
        <div class="clearfix"></div>
      </div>
    );
  }
}