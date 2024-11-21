import React from "react";

export default function EasyCook() {
    const indentedListStyle = {
        marginLeft: '20px'
    };

    return (
        <div>
            <h1>What is EASY COOK?</h1>
            <p>
                If somebody wants to cook by themselves but isn't good at cooking, here are the possible things that they might want to know:
            </p>
            <div style={indentedListStyle}>
                <ul>
                    <li>What delicious and healthy food can I cook easily</li>
                    <li>What ingredients do I need, and how much of each? Where can I get them?</li>
                    <li>How can I share my recipes with others or learn from skilled cooks?</li>
                </ul>
            </div>
            
            <img src="/img/rata.jpg"/>
        </div>
    );
}
