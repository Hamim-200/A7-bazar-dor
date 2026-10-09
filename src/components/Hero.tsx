import { getBanglaDate } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
    const banglaDate = getBanglaDate();

    return (
        <section className="bg-white border-b border-gray-100 py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                    <span className="badge badge-ghost border border-gray-200 text-gray-500 font-normal mb-4">
                        {banglaDate}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-snug tracking-tight">
                        আজকের বাজারের দাম এক নজরে
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের
                        পরিবর্তন এক জায়গায়।
                    </p>
                    <a
                        href="#সব-পণ্য"
                        className="btn btn-neutral btn-md font-medium rounded-full px-6"
                    >
                        সব পণ্য দেখুন
                    </a>
                </div>

                <div className="flex-1 flex justify-center">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজার"
                        width={480}
                        height={480}
                        priority
                        className="w-full max-w-sm md:max-w-md h-auto"
                    />
                </div>
            </div>
        </section>
    );
}