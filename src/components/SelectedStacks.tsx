import React from 'react';
import type { IStack } from '../types/stacksType';

interface SelectedStacksProps {
    stacks: IStack[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const SelectedStacks = ({ stacks, onRemove, onRemoveAll }: SelectedStacksProps) => {
    return (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
                <p className="text-xs text-slate-400 mt-1">
                    {stacks.length} {stacks.length === 1 ? 'Technology' : 'Technologies'} Selected
                </p>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                {stacks.map((stack) => (
                    <div key={stack.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={stack.icon}
                                alt={stack.name}
                                className="w-7 h-7 object-contain"
                            />
                            <div>
                                <h4 className="font-semibold text-sm text-slate-800 leading-tight">
                                    {stack.name}
                                </h4>
                                <p className="text-[11px] text-slate-400">
                                    {stack.category}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => onRemove(stack.id)}
                            className="text-slate-300 hover:text-red-500 p-1 transition-colors cursor-pointer text-base font-bold"
                            title="Remove"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50">
                <button
                    onClick={onRemoveAll}
                    className="w-full border border-red-200 text-red-500 hover:bg-red-50 font-medium py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
                >
                    Remove All
                </button>
            </div>
        </div>
    );
};

export default SelectedStacks;