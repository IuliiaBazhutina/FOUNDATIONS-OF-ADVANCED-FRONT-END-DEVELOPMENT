import React from 'react';
import { useState } from 'react';

// HoverCounter counts how many times user hovered over a div container
function HoverCounter() {
    const [hoverCount, setHoverCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <p>You hovered {hoverCount} times</p>
            <div onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // hoverCount counts number of hovering over
                onMouseOver={() => setHoverCount(hoverCount + 1)}
                // div changes the color once it hovered over
                style={{ width: '150px', height: '150px', backgroundColor: isHovered ? 'yellow' : 'green', textAlign: 'center', verticalAlign: 'middle', lineHeight: '150px', margin: '20px auto' }}>
                Hover over me
            </div>
        </div>
    );
}

// ItemList with conditional rendering displays what element (from 3 div) was clicked
function ItemList() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = ['Item 1', 'Item 2', 'Item 3'];

    const handleItemClick = (item) => { setSelectedItem(item); };

    return (
        <div>
            <div onClick={() => handleItemClick(1)}
                style={{ width: '60px', height: '60px', textAlign: 'center', verticalAlign: 'middle', lineHeight: '60px', margin: '0 auto', backgroundColor: 'green' }}>1</div>
            <div onClick={() => handleItemClick(2)}
                style={{ width: '60px', height: '60px', textAlign: 'center', verticalAlign: 'middle', lineHeight: '60px', margin: '0 auto', backgroundColor: 'pink' }}>2</div>
            <div onClick={() => handleItemClick(3)}
                style={{ width: '60px', height: '60px', textAlign: 'center', verticalAlign: 'middle', lineHeight: '60px', margin: '0 auto', backgroundColor: 'yellow' }}>3</div>
            {/* renders only if any item is selected */}
            {selectedItem && <p style={{ padding: "20px" }}>You selected: {selectedItem}</p>}
        </div>
    );
}

export default function Page_1() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>

            <h1>Page 1</h1>

            {/* navigation menu */}
            <nav>
                <ul style={{ padding: "20px", listStyle: "none", color: "blue" }}>
                    <li style={{ padding: '10px' }}><a href="/">Home</a></li>
                    <li style={{ padding: '10px' }}><a href="/page_2">Page 2</a></li>
                </ul>
            </nav >

            <p style={{ padding: "20px" }}>1. Component HoverCounter counts how many times you hovered over the square below:</p>
            <HoverCounter />

            <p style={{ padding: "20px" }}>2. Component ItemList with conditional rendering displays what element was clicked:</p>
            <ItemList />

        </div>
    );
}