import React from 'react';
// Add TableHeader arrow function  here
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
        </thead>
    )
}
// AddTableBody arrow function here


const Table = (props) => {
    
        const {characterData, removeCharacter} = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
                
            </table>
        )
    }

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}
export default Table;