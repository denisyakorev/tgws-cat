import 'rc-tree/assets/index.css';
import React from 'react';

import Tree, { TreeNode } from 'rc-tree';
//import cssAnimation from 'css-animation';

const STYLE = `
.collapse {
  overflow: hidden;
  display: block;
}

.collapse-active {
  transition: height 0.5s ease-out;
}

.rc-tree-node-selected {
  height:22px !important; 
}
`;

function PubTree() {
    return (
            <div className='fdb-box fdb-touch'>
                <h2>Структура документа</h2>
                <style dangerouslySetInnerHTML={{__html: STYLE}}/>
                <Tree
                    defaultExpandAll={false}
                    defaultExpandedKeys={['p1']}
                >
                    <TreeNode title="parent 1" key="p1">
                        <TreeNode key="p10" title="leaf"/>
                        <TreeNode title="parent 1-1" key="p11">
                            <TreeNode title="parent 2-1" key="p21">
                                <TreeNode title="leaf"/>
                                <TreeNode title="leaf"/>
                            </TreeNode>
                            <TreeNode key="p22" title="leaf"/>
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>

    )
};


export default PubTree