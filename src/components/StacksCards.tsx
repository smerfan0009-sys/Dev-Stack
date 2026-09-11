import { use } from 'react';
import type { IStack } from '../types/stacksType';

interface StacksCardsProps {
    stacksPromise: Promise<IStack[]>;
    onAddToStack: (stack: IStack) => void;
    selectedStacks: IStack[];
}

const getBadgeStyle = (badge?: string) => {
    switch (badge?.toLowerCase()) {
        case 'popular':
            return 'bg-sky-50 text-sky-600 border border-sky-100';
        case 'powerful':
            return 'bg-purple-50 text-purple-600 border border-purple-100';
        case 'fast':
            return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
        case 'essential':
            return 'bg-rose-50 text-rose-600 border border-rose-100';
        case 'nosql':
            return 'bg-teal-50 text-teal-600 border border-teal-100';
        case 'top sql':
            return 'bg-blue-50 text-blue-600 border border-blue-100';
        case 'reliable':
            return 'bg-indigo-50 text-indigo-600 border border-indigo-100';
        case 'modern':
            return 'bg-cyan-50 text-cyan-600 border border-cyan-100';
        case 'classic':
            return 'bg-violet-50 text-violet-600 border border-violet-100';
        case 'containers':
            return 'bg-blue-50 text-blue-700 border border-blue-200';
        case 'lightning fast':
            return 'bg-amber-50 text-amber-600 border border-amber-100';
        default:
            return 'bg-slate-100 text-slate-600 border border-slate-200';
    }
};

const StacksCards = ({ stacksPromise, onAddToStack, selectedStacks }: StacksCardsProps) => {
    const stacks = use(stacksPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.map((stack: IStack) => {

                const isSelected = selectedStacks.some((item) => item.id === stack.id);

                return (
                    <div
                        key={stack.id}
                        className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <img
                                    src={stack.icon}
                                    alt={stack.name}
                                    className="w-9 h-9 object-contain"
                                />
                                {stack.badge && (
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(stack.badge)}`}>
                                        {stack.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mt-5 mb-2">
                                {stack.name}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {stack.description}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                                <div className="flex items-center gap-2">
                                    <span className="bg-slate-100/80 px-2.5 py-1 rounded-md font-medium text-slate-500">
                                        {stack.category}
                                    </span>
                                    <span className=" px-8 py-1 rounded-md font-medium text-slate-500">
                                        {stack.difficulty}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 font-bold text-slate-700">
                                    <span className="text-amber-400 text-sm">★</span>
                                    <span>{stack.rating}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => onAddToStack(stack)}
                                disabled={isSelected}
                                className="w-full bg-[#0a0f1d] hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:bg-slate-300"
                            >
                                {isSelected ? 'Added' : 'Add to Stack'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StacksCards;