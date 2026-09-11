import React, { useState } from 'react';
import type { IStack } from '../types/stacksType';
import StacksCards from './StacksCards';
import SelectedStacks from './SelectedStacks';
import UnselectedStacks from './UnselectedStacks';

interface StacksProps {
    stacksPromise: Promise<IStack[]>;
}

const Stacks = ({ stacksPromise }: StacksProps) => {
    const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);

    const handleAddToStack = (stack: IStack) => {
        const exists = selectedStacks.some((item) => item.id === stack.id);
        if (!exists) {
            setSelectedStacks([...selectedStacks, stack]);
        }
    };

    const handleRemoveFromStack = (id: string) => {
        setSelectedStacks(selectedStacks.filter((item) => item.id !== id));
    };

    const handleRemoveAll = () => {
        setSelectedStacks([]);
    };

    return (
        <section className="py-8">
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900">
                    Explore the <span className="bg-gradient-to-r from-[rgb(219,75,169)] to-[rgb(202,79,185)] bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                <div className="lg:col-span-3">
                    <StacksCards
                        stacksPromise={stacksPromise}
                        onAddToStack={handleAddToStack}
                        selectedStacks={selectedStacks}
                    />
                </div>

                <div className="lg:col-span-1 sticky top-24">
                    {selectedStacks.length > 0 ? (
                        <SelectedStacks
                            stacks={selectedStacks}
                            onRemove={handleRemoveFromStack}
                            onRemoveAll={handleRemoveAll}
                        />
                    ) : (
                        <UnselectedStacks />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Stacks;