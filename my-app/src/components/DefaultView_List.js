// Import React
import React from 'react';
import HeaderApp from './HeaderApp';

const DefaultView_List = props => {
    return (
        <article>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Rating</th>
                        <th>Popularity</th>
                    </tr>
                </tbody>
            </table>

        </article>
    )
}

export default DefaultView_List;