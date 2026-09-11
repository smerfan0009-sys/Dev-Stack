import React, { use } from 'react';
import type { IStack } from '../types/stacksType';

interface StacksCardsProps {
    stacksPromise: Promise<IStack[]>;
    onAddToStack: (stack: IStack) => void;
    selectedStacks: IStack[];
}

const getBadgeStyle = (badge?: string) => {
    switch (badge?.toLowerCase()) {
        case 'popular':
        case 'essential':
        case 'top sql':
            return 'bg-sky-50 text-sky-500';
        case 'versatile':
        case 'standard':
            return 'bg-emerald-50 text-emerald-500';
        case 'fast':
        case 'ubiquitous':
            return 'bg-amber-50 text-amber-600';
        case 'ssr / edge':
        case 'cache':
            return 'bg-pink-50 text-pink-500';
        default:
            return 'bg-slate-100 text-slate-600';
    }
};

const StacksCards = ({ stacksPromise, onAddToStack, selectedStacks }: StacksCardsProps) => {
    const stacks = use(stacksPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.map((stack: IStack) => {
                // চেক করা হচ্ছে কার্ডটি অলরেডি সিলেক্টেড কি না
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
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 min-h-[40px]">
                                {stack.description}
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                                <div className="flex items-center gap-2">
                                    <span className="bg-slate-100/80 px-2.5 py-1 rounded-md font-medium text-slate-600">
                                        {stack.category}
                                    </span>
                                    <span className="bg-slate-100/80 px-2.5 py-1 rounded-md font-medium text-slate-600">
                                        {stack.difficulty}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 font-bold text-slate-700">
                                    <span className="text-amber-400 text-sm">★</span>
                                    <span>{stack.rating}</span>
                                </div>
                            </div>

                            {/* isSelected সত্য হলে বাটন disabled এবং unclickable হবে */}
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