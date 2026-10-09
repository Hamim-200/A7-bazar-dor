export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl opacity-90">🛒</span>
          <div>
            <h3 className="text-base font-semibold text-gray-900 tracking-tight">বাজার দর</h3>
            <p className="text-sm text-gray-500">
              প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center md:text-right max-w-md leading-relaxed">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
}