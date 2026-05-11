import Link from 'next/link';

export default function ThankYou() {
    return (
        <main className="min-h-screen bg-[#2A0845] flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-md w-full bg-[#3B135B] rounded-2xl p-8 shadow-2xl border border-purple-800">
                <h1 className="text-4xl font-bold text-[#FBB03B] mb-4 font-serif">
                    Thank You!
                </h1>
                <p className="text-gray-200 mb-8 text-lg">
                    Your order of Karuna Hot Sauce has been received. We're packing up the heat and will ship it out to you soon!
                </p>
                <Link
                    href="/"
                    className="inline-block bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}