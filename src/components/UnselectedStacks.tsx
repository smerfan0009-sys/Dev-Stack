import React from 'react';

const UnselectedStacks = () => {
    return (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">No technologies selected yet.</p>

            <div className="border border-dashed border-slate-200 rounded-xl py-5 px-4 text-center">
                <p className="text-slate-400 text-xs font-medium">
                    Your stack is empty.
                </p>
            </div>
        </div>
    );
};

export default UnselectedStacks;