import React          from 'react';
import ReactDOM       from 'react-dom'
import { expect }     from 'chai'
import ReactTestUtils from 'react-dom/test-utils'

import FightersGuild from '../index.jsx'
import store from '../../../stores'

describe('FightersGuild', () => {
  it('Should render the correct element', () => {
    let home = ReactTestUtils.renderIntoDocument(
      <FightersGuild store={store} />
    );
    let elem = ReactDOM.findDOMNode(home);
    expect(elem.tagName.toLowerCase()).to.equal('div');
  });
});
