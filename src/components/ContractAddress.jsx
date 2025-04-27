import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';

const ContractAddress = () => {
    const [confetti, setConfetti] = useState(false);
    const address = "Gom5MqTo1QmoUYvt139DJ938gaRvYS2qCoN5hCbjyTdQ";

    const copyContract = () => {
        navigator.clipboard.writeText(address).then(() => {
            setConfetti(true);
            setTimeout(() => setConfetti(false), 2000);
            toast.success('Contract address copied!', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        });
    };
  
    return (
        <div className="w-full max-w-3xl mx-auto text-center mt-16 mb-8">
            <Toaster position="top-center" reverseOrder={false} />
            {confetti && <Confetti numberOfPieces={150} recycle={false} />}
            <h2 className="text-5xl font-bold mb-6 font-bangers">Contract Address</h2>
            <div className="bg-orange-400 text-white p-4 rounded-lg shadow-lg mx-4 border-2 border-dashed border-white">
                <div className="flex items-center justify-center gap-2">
                    <p className="break-all font-mono">{address}</p>
                    <button
                        onClick={copyContract}
                        className="bg-white text-orange-400 p-1 px-2 rounded-md text-sm neon-glow"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};
  
export default ContractAddress;