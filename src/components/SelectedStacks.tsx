import React from 'react';

const SelectedStacks = ({stacks}) => {
    console.log(stacks,'stacks from selected stacks');
    return (
        <div>
            
            {
                stacks.map((stack)=>{
                    return <div>
                        {stack.name}
                    </div>

                })
            }

        </div>
    );
};

export default SelectedStacks;