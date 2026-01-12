"use client"
import { useState, useEffect } from "react";
import { X } from "lucide-react";
export default function AnnouncementBar() {
    const [visible, setVisible] = useState<boolean>(true);
  
    if (!visible) return null;
    return <div className="w-full bg-black/50 backdrop-blur-sm text-neutral-200 text-xm px-4 py-2 flex items-center justify-center relative z-50">
        <p className="text-center">This is my previous portfolio.{" "}
            <a href="https://jayeshkhuman.in" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-white transition-colors">View my current portfolio</a>
        </p>
        <button onClick={()=>setVisible(false)} aria-label="Dismiss" className="absolute right-4 text-neutral-300 hover:text-white transition-colors cursor-pointer"><X className="w-4 h-4" /></button>
    </div>
}
