// Import React
import React from 'react';
import HeaderApp from './HeaderApp';

const DefaultView_List = props => {
    return (
      <article>
          <table>
              <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Rating</th>
                  <th>Popularity</th>
              </tr>
          </table>

      </article>
    )
}

export default DefaultView_List;