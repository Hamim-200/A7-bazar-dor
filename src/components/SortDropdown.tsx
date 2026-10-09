"use client";

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
    return (
        <select
            className="select select-sm bg-white border border-gray-200 rounded-full px-4 font-normal text-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="default">সাজান: ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
        </select>
    );
}