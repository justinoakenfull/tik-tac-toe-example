// AccentColorPicker.jsx
import React, { useState, useEffect } from 'react';

export default function AccentColourPicker() {
    // 1. Read the current --accent value (fallback if not set)
    const initial = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim() || '#5c6ac4';

    const [accent, setAccent] = useState(initial);

    // 2. Whenever accent changes, write it back into :root
    useEffect(() => {
        document.documentElement.style.setProperty('--accent', accent);
    }, [accent]);

    return (
        <div className="colour-picker">
            <label htmlFor="accentPicker">Accent&nbsp;Colour</label>
            <input
                id="accentPicker"
                type="color"
                value={accent}
                onChange={e => setAccent(e.target.value)}
                aria-label="Choose accent colour"
            />
        </div>
    );
}
