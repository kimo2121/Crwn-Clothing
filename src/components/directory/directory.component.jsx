import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';
import {selectDirectorySections} from '../../redux/directory/directory.seletors';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';

const Directory =({sections}) =>(
<div className='directory-menu'>
 {sections.map(({id,...otherSectionProps})=>(
 <MenuItem key={id} {...otherSectionProps}/> 
 ))}
</div>
 );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
 export default connect(mapStateToProps)(Directory);