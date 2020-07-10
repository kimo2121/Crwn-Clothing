import React from 'react';

import  './collection-preview.component.styles.scss';

import CollectionItem  from '../collection-item/collection-item.component';


const CollectionPreview =({title, items})=>(
<div className='collection-preview'>
    <hi1 className='title'>{title.toUpperCase()}</hi1>
    <div className='preview'>
    
        {items
            .filter((item,idx)=> idx < 4)
            .map(item=>(
             <CollectionItem key={item.id} item={item}/>
            ))}
    </div>
</div>
);
export default CollectionPreview;