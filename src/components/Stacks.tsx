import React, { use } from 'react';
import type { IStack } from '../types/stacksType';
import SelectedStacks from '../components/SelectedStacks';

interface StacksProps {
    stacksPromise: Promise<Istaks[]>
}

const Stacks = ({ stacksPromise }: StacksProps) => {
    console.log(stacksPromise)

    const stacks = use(stacksPromise);
    console.log(stacks, "stacks");
    return (
        <div>
            <div>

            </div>

            <div>
                <SelectedStacks stacks={stacks} />
            </div>

        </div>
    );
};

export default Stacks;